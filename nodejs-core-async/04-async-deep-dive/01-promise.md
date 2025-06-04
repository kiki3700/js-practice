# Promise란?

JavaScript에서 비동기 작업을 처리하는 한 가지 방법입니다. `Promise`는 비동기 작업의 최종 완료(또는 실패)와 그 결과 값을 나타내는 객체입니다. 콜백 함수를 중첩해서 사용하는 이른바 "콜백 지옥(Callback Hell)"의 가독성 문제를 해결하고, 비동기 코드의 흐름을 더 명확하게 관리할 수 있도록 도와줍니다.

## Promise의 세 가지 상태

Promise는 다음 세 가지 상태 중 하나를 가집니다.

1.  **대기 (Pending):** 초기 상태로, 비동기 작업이 아직 완료되지 않은 상태입니다.
2.  **이행 (Fulfilled):** 비동기 작업이 성공적으로 완료되어 결과 값을 사용할 수 있는 상태입니다. `resolve` 함수가 호출되면 이 상태가 됩니다.
3.  **거부 (Rejected):** 비동기 작업이 실패하여 에러가 발생한 상태입니다. `reject` 함수가 호출되면 이 상태가 됩니다.

Promise는 한 번 이행되거나 거부되면 그 상태가 변하지 않습니다 (settled).

## Promise 생성하기

`new Promise()` 생성자를 사용하여 Promise 객체를 만듭니다. 생성자에는 `executor`라는 함수가 인자로 전달되며, 이 함수는 `resolve`와 `reject`라는 두 개의 함수를 인자로 받습니다.

```javascript
function fetchData(shouldSucceed) {
    return new Promise((resolve, reject) => {
        console.log("데이터를 가져오는 중...");
        setTimeout(() => {
            if (shouldSucceed) {
                const data = { id: 1, name: "Sample Data" };
                console.log("데이터 가져오기 성공!");
                resolve(data); // 성공 시 resolve 호출
            } else {
                const error = new Error("데이터를 가져오는 데 실패했습니다.");
                console.error("데이터 가져오기 실패!");
                reject(error); // 실패 시 reject 호출
            }
        }, 1500);
    });
}
```

-   비동기 작업이 성공하면 `resolve(value)`를 호출하여 Promise를 `fulfilled` 상태로 만들고 결과 값을 전달합니다.
-   비동기 작업이 실패하면 `reject(error)`를 호출하여 Promise를 `rejected` 상태로 만들고 에러 객체를 전달합니다.

## Promise 사용하기 (소비하기)

생성된 Promise는 `.then()`, `.catch()`, `.finally()` 메서드를 사용하여 그 결과를 처리합니다.

### `.then(onFulfilled, onRejected)`

Promise가 `fulfilled` 상태가 되면 `onFulfilled` 콜백 함수가 호출되고, `rejected` 상태가 되면 `onRejected` 콜백 함수가 호출됩니다.

```javascript
fetchData(true)
    .then(
        data => { // onFulfilled
            console.log("then (성공):", data);
        },
        error => { // onRejected (선택 사항)
            console.error("then (실패):", error.message);
        }
    );

// 실패 케이스
fetchData(false)
    .then(
        data => {
            console.log("then (성공):", data);
        }
        // onRejected를 생략하고 .catch()로 처리 가능
    );
```

### `.catch(onRejected)`

Promise가 `rejected` 상태가 되거나, 이전 `.then()`에서 에러가 발생했을 때 실행될 콜백 함수를 등록합니다. `then(null, onRejected)`와 동일하게 동작합니다.

```javascript
fetchData(false)
    .then(data => {
        console.log("성공:", data);
        // 여기서 에러가 발생하면 catch에서 처리됨
        // throw new Error("then 내부에서 발생한 에러");
    })
    .catch(error => {
        console.error("catch (실패):", error.message);
    });
```

### `.finally(onFinally)`

Promise가 `fulfilled`되든 `rejected`되든 관계없이 항상 실행될 콜백 함수를 등록합니다. 주로 리소스 정리 등의 작업에 사용됩니다.

```javascript
fetchData(true)
    .then(data => {
        console.log("성공:", data);
    })
    .catch(error => {
        console.error("실패:", error.message);
    })
    .finally(() => {
        console.log("Promise 작업 완료 (성공/실패 무관).");
    });
```

## Promise 체이닝 (Promise Chaining)

`.then()`과 `.catch()` 메서드는 항상 새로운 Promise 객체를 반환합니다. 이를 통해 여러 비동기 작업을 순차적으로 연결하여 실행할 수 있습니다. 이를 "Promise 체이닝"이라고 합니다.

```javascript
function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 완료");
            resolve(10);
        }, 500);
    });
}

function step2(valueFromStep1) {
    console.log(`Step 2 시작 (이전 값: ${valueFromStep1})`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 완료");
            resolve(valueFromStep1 * 2);
        }, 500);
    });
}

step1()
    .then(result1 => { // result1은 10
        return step2(result1); // step2는 새로운 Promise를 반환
    })
    .then(result2 => { // result2는 20
        console.log("최종 결과:", result2);
    })
    .catch(error => {
        console.error("체인 중 에러 발생:", error);
    });
```

## Promise 정적 메서드

-   **`Promise.all(iterable)`**: 여러 Promise를 동시에 실행하고, 모든 Promise가 `fulfilled`될 때까지 기다립니다. 모든 Promise의 결과값을 배열로 반환합니다. 하나라도 `rejected`되면 즉시 `rejected` 상태가 됩니다.
-   **`Promise.race(iterable)`**: 여러 Promise 중 가장 먼저 `settled`(fulfilled 또는 rejected)되는 Promise의 결과를 따릅니다.
-   **`Promise.allSettled(iterable)`**: 모든 Promise가 `settled`될 때까지 기다립니다. 각 Promise의 상태와 값(또는 이유)을 담은 객체 배열을 반환합니다.
-   **`Promise.any(iterable)`**: 여러 Promise 중 가장 먼저 `fulfilled`되는 Promise의 결과를 따릅니다. 모든 Promise가 `rejected`되면 `AggregateError`와 함께 `rejected` 상태가 됩니다.
-   **`Promise.resolve(value)`**: 주어진 값으로 즉시 `fulfilled`되는 Promise를 생성합니다.
-   **`Promise.reject(reason)`**: 주어진 이유로 즉시 `rejected`되는 Promise를 생성합니다.

```javascript
// Promise.all 예제
const p1 = Promise.resolve("첫 번째");
const p2 = new Promise(resolve => setTimeout(() => resolve("두 번째 (1초 후)"), 1000));
const p3 = 99; // 일반 값도 Promise.resolve()로 처리됨

Promise.all([p1, p2, p3])
    .then(values => console.log("Promise.all 결과:", values)) // ["첫 번째", "두 번째 (1초 후)", 99]
    .catch(error => console.error("Promise.all 에러:", error));
```

Promise는 비동기 코드를 더 구조적이고 관리하기 쉽게 만들어주며, `async/await` 문법의 기반이 됩니다.