# 이벤트 루프 (Event Loop)

-   **설명:**
    Node.js가 **싱글 스레드**임에도 불구하고 **논블로킹(Non-blocking) I/O**를 통해 높은 **동시성(Concurrency)**을 처리할 수 있게 하는 핵심 메커니즘입니다. 쉽게 말해, "하나의 일꾼(스레드)이 여러 가지 일을 동시에 처리하는 것처럼 보이게 만드는 마법" 같은 존재입니다.

    -   **주요 구성 요소:**
        1.  **콜 스택 (Call Stack):** 현재 실행 중인 함수들의 목록을 관리하는 LIFO(Last-In, First-Out) 구조의 스택입니다. 함수가 호출되면 스택에 쌓이고, 실행이 완료되면 스택에서 제거됩니다. JavaScript 코드는 이 콜 스택에서 실행됩니다.
        2.  **힙 (Heap):** 객체, 배열 등 동적으로 생성된 데이터가 저장되는 메모리 공간입니다.
        3.  **백그라운드 (Background / Web APIs / C++ APIs):** `setTimeout`, `setInterval`, 파일 I/O (`fs` 모듈), 네트워크 요청 (`http` 모듈) 등 시간이 오래 걸릴 수 있는 작업들은 Node.js 내부의 C++ API (Libuv가 담당) 또는 운영체제의 비동기 기능을 통해 백그라운드에서 처리됩니다. **이 작업들은 메인 스레드를 막지 않습니다.**
        4.  **태스크 큐 (Task Queue / Callback Queue / Macrotask Queue):** 백그라운드에서 완료된 작업들의 콜백 함수들이 대기하는 FIFO(First-In, First-Out) 구조의 큐입니다. (예: `setTimeout` 콜백, `setInterval` 콜백, I/O 완료 콜백)
        5.  **마이크로태스크 큐 (Microtask Queue / Job Queue):** 태스크 큐보다 우선순위가 높은 큐입니다. 주로 Promise의 `.then()`, `.catch()`, `.finally()` 콜백이나 `process.nextTick()` 콜백이 여기에 들어갑니다.
        6.  **이벤트 루프 (Event Loop):** **콜 스택이 비어 있을 때마다** 태스크 큐 또는 마이크로태스크 큐를 확인하여, 대기 중인 콜백 함수가 있으면 이를 콜 스택으로 가져와 실행시키는 역할을 반복적으로 수행합니다.

    -   **단일 스레드 비동기 I/O 처리 방식 흐름:**
        1.  JavaScript 코드가 실행되면 함수들이 콜 스택에 쌓였다가 실행 후 제거됩니다.
        2.  만약 `setTimeout(callbackA, 1000)`이나 `fs.readFile('file.txt', callbackB)` 같은 비동기 함수를 만나면, Node.js는 해당 작업을 백그라운드(Libuv)로 보냅니다. **메인 스레드는 이 작업이 끝날 때까지 기다리지 않고 바로 다음 코드를 실행합니다 (논블로킹).**
        3.  백그라운드에서 타이머가 만료되거나 파일 읽기가 완료되면, 해당 콜백 함수(`callbackA` 또는 `callbackB`)는 **태스크 큐**로 이동합니다.
        4.  만약 Promise의 `.then(callbackC)`과 같은 코드가 실행되면, Promise가 resolve된 후 `callbackC`는 **마이크로태스크 큐**로 이동합니다.
        5.  **이벤트 루프는 끊임없이 다음을 반복합니다:**
            -   **콜 스택이 비어있는가?**
            -   **마이크로태스크 큐에 작업이 있는가?** 있다면, 큐에 있는 **모든** 마이크로태스크를 순서대로 꺼내 콜 스택으로 옮겨 실행합니다.
            -   **태스크 큐에 작업이 있는가?** (마이크로태스크 큐가 비어있고, 콜 스택도 비어있을 때) 있다면, 큐에서 **하나의** 태스크를 꺼내 콜 스택으로 옮겨 실행합니다.
        6.  이 과정이 계속 반복되면서 Node.js 애플리케이션이 실행됩니다.

    -   **예제 코드로 이해하기:**
        ```javascript
        console.log('Start'); // 1. 콜 스택: console.log('Start') -> 실행 후 제거

        setTimeout(() => {
          console.log('Timeout callback'); // 5. (1초 후) 태스크 큐 -> 이벤트 루프 -> 콜 스택 -> 실행
        }, 1000); // 2. 백그라운드로 타이머 설정 (메인 스레드 안 막음)

        Promise.resolve().then(() => {
          console.log('Promise.then callback 1'); // 4. 마이크로태스크 큐 -> 이벤트 루프 -> 콜 스택 -> 실행
        });

        Promise.resolve().then(() => {
          console.log('Promise.then callback 2'); // 4. 마이크로태스크 큐 -> 이벤트 루프 -> 콜 스택 -> 실행
        });

        console.log('End'); // 3. 콜 스택: console.log('End') -> 실행 후 제거

        // 예상 출력 순서:
        // Start
        // End
        // Promise.then callback 1
        // Promise.then callback 2
        // Timeout callback
        ```
        **설명:**
        - `Start`와 `End`가 먼저 출력됩니다 (동기 코드).
        - `setTimeout`의 콜백은 1초 뒤 태스크 큐로 갑니다.
        - `Promise.then`의 콜백들은 즉시 마이크로태스크 큐로 갑니다.
        - 동기 코드가 모두 실행되어 콜 스택이 비면, 이벤트 루프는 **마이크로태스크 큐를 먼저 확인**하고, `Promise.then callback 1`과 `Promise.then callback 2`를 순서대로 실행합니다.
        - 마이크로태스크 큐가 비워진 후, (1초가 지났다면) 이벤트 루프는 태스크 큐에서 `Timeout callback`을 가져와 실행합니다.

-   **학습 목표:**
    -   이벤트 루프의 각 구성 요소(콜 스택, 힙, 태스크 큐, 마이크로태스크 큐, 이벤트 루프)의 역할과 상호작용을 이해합니다.
    -   Node.js의 비동기 처리 방식이 이벤트 루프를 통해 어떻게 이루어지는지 설명할 수 있어야 합니다.
        -   **논블로킹 I/O의 중요성:** 왜 Node.js가 웹 서버와 같이 I/O 바운드 작업에 적합한지 이벤트 루프와 연관 지어 설명할 수 있어야 합니다.
    -   매크로태스크(Macrotask)와 마이크로태스크(Microtask)의 차이점과 실행 우선순위를 이해합니다. (예: `setTimeout` vs `Promise.then`)
        -   **매크로태스크 (Macrotasks / Tasks):** `setTimeout`, `setInterval`, `setImmediate`, I/O 작업 콜백, UI 렌더링(브라우저 환경). 이벤트 루프의 한 사이클에서 하나의 매크로태스크만 처리될 수 있습니다.
        -   **마이크로태스크 (Microtasks / Jobs):** `Promise.then/catch/finally`, `process.nextTick` (Node.js 전용, 다른 마이크로태스크보다 우선순위 높음), `queueMicrotask`. 현재 매크로태스크가 완료된 직후, 다음 매크로태스크를 시작하기 전에 큐에 있는 모든 마이크로태스크가 실행됩니다.
    -   `process.nextTick()`이 다른 마이크로태스크보다 우선순위가 높다는 점과, 과도하게 사용 시 이벤트 루프를 굶주리게(starve) 할 수 있다는 점을 이해합니다.
    -   간단한 비동기 코드(setTimeout, Promise 등 포함)의 실행 순서를 예측하고 그 이유를 이벤트 루프의 동작 원리에 기반하여 설명할 수 있습니다.

    -   **이벤트 루프의 단계 (Phases) - 심화 (선택적):**
        Libuv의 이벤트 루프는 여러 단계로 구성되어 있으며, 각 단계는 특정 종류의 콜백들을 처리합니다.
        1.  **timers:** `setTimeout()`, `setInterval()`에 의해 스케줄된 콜백들을 실행합니다.
        2.  **pending callbacks (또는 I/O callbacks):** 이전 루프 반복에서 완료되지 않은 I/O 콜백들을 실행합니다. (예: 네트워크 소켓 에러)
        3.  **idle, prepare:** 내부적으로만 사용됩니다.
        4.  **poll:** 새로운 I/O 이벤트를 가져오고, 적절한 I/O 관련 콜백들을 실행합니다 (거의 모든 I/O 콜백이 여기서 실행됨, 단 타이머와 `setImmediate` 제외). 필요한 경우 여기서 블로킹될 수 있습니다.
        5.  **check:** `setImmediate()` 콜백들을 실행합니다.
        6.  **close callbacks:** `socket.on('close', ...)`와 같은 close 이벤트 콜백들을 실행합니다.
        각 단계가 끝날 때마다, 그리고 `poll` 단계에서 이벤트가 발생할 때마다 마이크로태스크 큐(`process.nextTick()` 포함)가 처리됩니다.