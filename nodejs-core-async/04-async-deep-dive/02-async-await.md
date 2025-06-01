# async/await

-   **설명:** Promise를 기반으로 동작하며, 비동기 코드를 마치 동기 코드처럼 보이게 작성할 수 있도록 하는 문법적 설탕(syntactic sugar)입니다. `async` 키워드는 함수가 항상 Promise를 반환하도록 만들고, `await` 키워드는 `async` 함수 내에서 Promise가 처리(settled: fulfilled 또는 rejected)될 때까지 함수의 실행을 일시 중지시킵니다.
-   **학습 목표:**
    -   `async` 함수를 정의하고 사용하는 방법을 익힙니다.
    -   `async` 함수 내에서 `await` 키워드를 사용하여 Promise의 결과를 기다리고 받아오는 방법을 학습합니다.
    -   `try...catch` 문을 사용하여 `async/await` 코드에서 발생하는 에러(rejected Promise)를 효과적으로 처리하는 방법을 익힙니다.
    -   `async/await`를 사용하여 기존의 Promise 기반 코드를 더 간결하고 가독성 높게 리팩토링하는 방법을 연습합니다.
    -   여러 `await` 호출을 병렬로 처리하는 방법(예: `Promise.all`과 함께 사용)을 이해합니다.