// 02-es6-features/02-templateLiterals.js

/**
 * 템플릿 리터럴 (Template Literals) - ES6
 * - 백틱(``)을 사용하여 문자열을 정의합니다.
 * - 문자열 내에 변수나 표현식을 쉽게 삽입할 수 있습니다 (보간, interpolation).
 * - 여러 줄 문자열을 쉽게 작성할 수 있습니다.
 */

const name = "Noah";
const age = 30;

// 1. 문자열 보간 (String Interpolation)
// 이전 방식:
const greetingOld = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log("이전 방식:", greetingOld);

// 템플릿 리터럴 사용:
const greetingNew = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("템플릿 리터럴:", greetingNew);

// 표현식 삽입도 가능
const price = 1000;
const quantity = 5;
const message = `Total price: ${price * quantity}원 (부가세 포함: ${price * quantity * 1.1}원)`;
console.log("표현식 삽입:", message);

// 2. 여러 줄 문자열 (Multiline Strings)
const multiLineString = `이것은
여러 줄로 이루어진
문자열입니다.`;
console.log("여러 줄 문자열:\n", multiLineString);

// 이전 방식에서는 \n (개행 문자)을 사용해야 했습니다.
const multiLineOld = "이것은\n여러 줄로 이루어진\n문자열입니다.";
console.log("이전 방식 여러 줄:\n", multiLineOld);