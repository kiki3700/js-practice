# async/await

-   **설명:**
    `async/await`는 JavaScript에서 비동기 코드를 작성하는 현대적인 방법 중 하나로, Promise를 기반으로 동작합니다. 비동기 작업을 마치 동기 코드처럼 순차적으로 실행되는 것처럼 보이게 만들어 코드의 가독성을 크게 향상시킵니다.

    -   **`async` 키워드:**
        -   함수 선언 앞에 `async` 키워드를 붙이면 해당 함수는 항상 Promise를 반환합니다.
        -   함수가 명시적으로 Promise를 반환하지 않더라도, `async` 함수는 그 반환 값을 `Promise.resolve()`로 감싸서 Promise로 만듭니다.
        -   함수 내에서 에러가 발생하면, 그 에러는 `Promise.reject()`로 감싸져 반환되는 Promise의 거부(rejected) 상태가 됩니다.

    -   **`await` 키워드:**
        -   `await`는 **`async` 함수 내부에서만** 사용할 수 있습니다.
        -   Promise 앞에 `await` 키워드를 사용하면, 해당 Promise가 처리(settled: 이행(fulfilled) 또는 거부(rejected))될 때까지 `async` 함수의 실행을 일시적으로 멈춥니다.
        -   Promise가 이행되면, `await`는 Promise의 결과 값을 반환합니다.
        -   Promise가 거부되면, `await`는 에러를 발생시킵니다. 이 에러는 `try...catch` 문으로 잡을 수 있습니다.

## `async` 함수 정의하고 사용하기

`async` 함수는 다음과 같이 정의할 수 있습니다.

```javascript
// async 함수 선언식
async function fetchDataAsync() {
    // 비동기 작업 (예: API 호출, 파일 읽기)
    return "데이터 로딩 완료!"; // 이 값은 Promise.resolve("데이터 로딩 완료!")로 반환됨
}

// async 화살표 함수
const fetchDataArrowAsync = async () => {
    // throw new Error("데이터 로딩 실패!"); // 이 에러는 Promise.reject(new Error(...))로 반환됨
    return "데이터 로딩 완료 (화살표 함수)!";
};

fetchDataAsync().then(data => {
    console.log(data); // 출력: 데이터 로딩 완료!
});

fetchDataArrowAsync()
    .then(data => console.log(data)) // 출력: 데이터 로딩 완료 (화살표 함수)!
    .catch(error => console.error(error.message)); // 만약 에러가 발생했다면 여기서 처리
```

## `await` 키워드로 Promise 결과 기다리기

`await`는 `async` 함수 내에서 Promise의 결과를 기다리는 데 사용됩니다.

```javascript
function fetchData(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve({ id: 1, content: "성공적으로 데이터를 가져왔습니다." });
            } else {
                reject(new Error("데이터를 가져오는 데 실패했습니다."));
            }
        }, 1000);
    });
}

async function processData() {
    console.log("데이터 처리 시작...");
    try {
        // fetchData(true) Promise가 완료될 때까지 기다림
        const data = await fetchData(true); // Promise가 이행되면 결과값이 data에 할당됨
        console.log("받은 데이터:", data);

        // 만약 fetchData(false)를 호출하면 에러가 발생하여 catch 블록으로 이동
        // const failedData = await fetchData(false);
        // console.log("이 부분은 실행되지 않습니다.");

    } catch (error) {
        console.error("에러 발생:", error.message);
    } finally {
        console.log("데이터 처리 종료.");
    }
}

processData();
// 예상 출력:
// 데이터 처리 시작...
// (1초 후)
// 받은 데이터: { id: 1, content: "성공적으로 데이터를 가져왔습니다." }
// 데이터 처리 종료.
```

## `try...catch`로 에러 처리하기

`await` 표현식에서 Promise가 거부(rejected)되면 에러가 발생합니다. 이 에러는 동기 코드에서와 마찬가지로 `try...catch` 문을 사용하여 처리할 수 있습니다.

```javascript
async function processDataWithError() {
    console.log("에러 처리 예제 시작...");
    try {
        const result = await fetchData(false); // 이 Promise는 실패(reject)할 것입니다.
        console.log("성공:", result); // 이 줄은 실행되지 않습니다.
    } catch (error) {
        console.error("try...catch 에러:", error.message); // "데이터를 가져오는 데 실패했습니다."
    }
    console.log("에러 처리 예제 종료.");
}

processDataWithError();
```

-   **학습 목표:**
    -   `async` 함수를 정의하고 사용하는 방법을 익힙니다.
    -   `async` 함수 내에서 `await` 키워드를 사용하여 Promise의 결과를 기다리고 받아오는 방법을 학습합니다.
    -   `try...catch` 문을 사용하여 `async/await` 코드에서 발생하는 에러(rejected Promise)를 효과적으로 처리하는 방법을 익힙니다.
    -   `async/await`를 사용하여 기존의 Promise 기반 코드를 더 간결하고 가독성 높게 리팩토링하는 방법을 연습합니다.
    -   여러 `await` 호출을 병렬로 처리하는 방법(예: `Promise.all`과 `async/await`를 함께 사용)을 이해합니다.

## Promise 체이닝과의 비교

`async/await`는 `.then()`과 `.catch()`를 사용하는 Promise 체이닝보다 코드를 더 읽기 쉽게 만들어줍니다.

**Promise 체이닝 예시:**
```javascript
function step1() {
    return new Promise(resolve => setTimeout(() => { console.log("Step 1 완료"); resolve(10); }, 500));
}
function step2(value) {
    return new Promise(resolve => setTimeout(() => { console.log("Step 2 완료"); resolve(value * 2); }, 500));
}

step1()
    .then(result1 => {
        console.log("Step 1 결과:", result1);
        return step2(result1);
    })
    .then(result2 => {
        console.log("Step 2 결과 (최종):", result2);
    })
    .catch(error => {
        console.error("에러 발생:", error);
    });
```

**`async/await` 사용 예시:**
```javascript
async function processSteps() {
    try {
        console.log("단계 처리 시작 (async/await)");
        const result1 = await step1();
        console.log("Step 1 결과:", result1);

        const result2 = await step2(result1);
        console.log("Step 2 결과 (최종):", result2);
    } catch (error) {
        console.error("async/await 중 에러 발생:", error);
    }
}

processSteps();
```
`async/await` 버전이 마치 동기적인 코드 흐름처럼 보여서 이해하기가 더 쉽습니다.

## 여러 Promise 병렬 처리하기

여러 개의 비동기 작업을 동시에 실행하고 모든 작업이 완료될 때까지 기다리려면 `Promise.all()`과 `await`를 함께 사용할 수 있습니다.

```javascript
async function parallelTasks() {
    console.log("병렬 작업 시작");
    try {
        const [resultA, resultB, resultC] = await Promise.all([
            fetchData(true), // 1초 소요
            new Promise(resolve => setTimeout(() => resolve("작업 B 완료"), 500)), // 0.5초 소요
            Promise.resolve("작업 C 즉시 완료")
        ]);

        console.log("모든 작업 완료:");
        console.log("Result A:", resultA);
        console.log("Result B:", resultB);
        console.log("Result C:", resultC);
    } catch (error) {
        console.error("병렬 작업 중 에러:", error.message);
    }
}

parallelTasks();
// 예상 출력 (약 1초 후):
// 병렬 작업 시작
// 모든 작업 완료:
// Result A: { id: 1, content: "성공적으로 데이터를 가져왔습니다." }
// Result B: 작업 B 완료
// Result C: 작업 C 즉시 완료
```

`await`를 각 Promise에 순차적으로 사용하면 작업들이 하나씩 실행되지만 (`await taskA(); await taskB();`), `Promise.all()`과 함께 사용하면 병렬로 실행되어 전체 시간을 단축할 수 있습니다.