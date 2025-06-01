# Promise

-   **설명:** 비동기 작업의 최종 완료(fulfillment) 또는 실패(rejection)와 그 결과 값을 나타내는 객체입니다. 콜백 함수의 중첩(Callback Hell)을 피하고 비동기 코드를 보다 체계적이고 가독성 있게 작성할 수 있도록 도와줍니다.
    -   Promise는 세 가지 상태를 가집니다:
        -   `pending`: 초기 상태, 아직 작업이 완료되거나 실패하지 않음.
        -   `fulfilled`: 작업이 성공적으로 완료됨.
        -   `rejected`: 작업이 실패함.
-   **학습 목표:**
    -   Promise의 개념과 세 가지 상태(pending, fulfilled, rejected)를 이해합니다.
    -   `new Promise((resolve, reject) => { ... })`를 사용하여 Promise 객체를 생성하는 방법을 익힙니다.
    -   `.then(onFulfilled, onRejected)`을 사용하여 Promise의 성공 및 실패 결과를 처리하는 방법을 학습합니다.
    -   `.catch(onRejected)`를 사용하여 Promise 체인에서 발생하는 에러를 효과적으로 처리하는 방법을 익힙니다.
    -   `.finally(onFinally)`를 사용하여 Promise의 성공/실패 여부와 관계없이 항상 실행되어야 하는 코드를 작성하는 방법을 학습합니다.
    -   `Promise.all(iterable)`, `Promise.race(iterable)`, `Promise.allSettled(iterable)`, `Promise.any(iterable)`와 같은 정적 메서드들의 사용법과 용도를 이해합니다.
    -   Promise 체이닝을 통해 여러 비동기 작업을 순차적으로 연결하는 방법을 익힙니다.