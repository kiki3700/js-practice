// 08-callbacks.js

/**
 * 콜백 함수 (Callback Functions)
 * - 다른 함수의 인자로 전달되는 함수입니다.
 * - 특정 작업이 완료된 후 실행되어야 하는 코드를 정의할 때 사용됩니다.
 * - 비동기 프로그래밍의 기본이 됩니다.
 */

// 1. 기본적인 콜백 함수 예제
function processUserInput(name, callback) {
  console.log("사용자 입력 처리 중...");
  // 시간이 걸리는 작업이라고 가정
  setTimeout(() => {
    const greeting = `안녕하세요, ${name}님!`;
    callback(greeting); // 작업 완료 후 콜백 함수 실행
  }, 1000);
}

function displayGreeting(message) {
  console.log("콜백 실행됨:", message);
}

processUserInput("노아", displayGreeting);

// 익명 함수를 콜백으로 사용
processUserInput("엘리스", function(message) {
  console.log("익명 콜백 실행됨:", message.toUpperCase());
});

// 2. 콜백 함수를 사용하는 고차 함수 (Higher-Order Function) 예제
/**
 * 고차 함수 (Higher-Order Function)란?
 * - JavaScript에서 함수는 일급 객체(First-class citizen)로 취급됩니다.
 *   이는 함수를 변수에 할당하거나, 다른 함수의 인자로 전달하거나, 함수의 결과로 반환할 수 있다는 의미입니다.
 * - 고차 함수는 이러한 특징을 활용하여, 다음 중 하나 이상의 조건을 만족하는 함수를 말합니다:
 *   1. 다른 함수를 인자로 받는 함수 (예: 콜백 함수를 받는 함수)
 *   2. 함수를 결과로 반환하는 함수
 * - 아래 `operateNumbers` 함수는 `operationCallback`이라는 함수를 인자로 받으므로 고차 함수입니다.
 */
function operateNumbers(a, b, operationCallback) {
  return operationCallback(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("고차 함수 (덧셈 콜백):", operateNumbers(5, 3, add));       // 8
console.log("고차 함수 (곱셈 콜백):", operateNumbers(5, 3, multiply));    // 15
console.log("고차 함수 (익명 뺄셈 콜백):", operateNumbers(5, 3, (x, y) => x - y)); // 2

// 콜백 헬 (Callback Hell): 콜백 함수가 중첩되어 코드의 가독성과 유지보수성이 떨어지는 문제.
// 이를 해결하기 위해 Promise, async/await 등이 등장했습니다. (추후 학습)