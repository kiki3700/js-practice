// 07-functions.js

/**
 * 함수 (Functions)
 * 특정 작업을 수행하는 코드 블록입니다. 재사용 가능하며, 코드를 모듈화하는 데 도움을 줍니다.
 */

// 1. 함수 선언식 (Function Declaration)
// - 호이스팅의 영향을 받습니다 (함수 선언 전에 호출 가능).
console.log("함수 선언식 결과:", add(5, 3)); // 8 (호이스팅으로 인해 호출 가능)

function add(a, b) {
  return a + b;
}

// 2. 함수 표현식 (Function Expression)
// - 변수에 함수를 할당하는 형태입니다.
// - 호이스팅 시 변수 선언부만 끌어올려지므로, 할당 전에 호출하면 에러가 발생합니다.
// console.log(subtract(10, 4)); // TypeError: subtract is not a function (또는 undefined)

const subtract = function(a, b) {
  return a - b;
};
console.log("함수 표현식 결과:", subtract(10, 4)); // 6

// 익명 함수 (Anonymous Function): 이름이 없는 함수. 함수 표현식에서 주로 사용됩니다.
const multiply = function(a, b) { return a * b; };

// 기명 함수 표현식 (Named Function Expression): 디버깅에 유용할 수 있습니다.
const divide = function division(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
};
console.log("기명 함수 표현식 결과:", divide(10, 2)); // 5
// console.log(division(10,2)); // Error: division is not defined (함수 이름은 함수 내부에서만 접근 가능)


// 3. 화살표 함수 (Arrow Function) - ES6에서 도입
// - function 키워드 대신 => 를 사용하여 함수를 간결하게 표현합니다.
// - 자체적인 `this`, `arguments`, `super`, `new.target` 바인딩을 갖지 않습니다.
//   (자세한 내용은 thisBinding.js 및 arrowFunctions.js 에서 다룹니다.)
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log("화살표 함수 결과:", greet("Noah"));

// 함수 본문이 한 줄이고, 그 줄이 반환문이면 중괄호와 return 키워드 생략 가능
const square = x => x * x;
console.log("간결한 화살표 함수 결과:", square(4)); // 16

// 매개변수가 하나일 경우 소괄호 생략 가능 (단, 매개변수가 없거나 여러 개면 소괄호 필수)
const logMessage = message => console.log(message);
logMessage("화살표 함수 매개변수 1개");

const noParamFunc = () => console.log("매개변수 없는 화살표 함수");
noParamFunc();