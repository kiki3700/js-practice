// 02-es6-features/07-esModules/exporter.js

// 변수 내보내기
export const PI = 3.14159;

export let counter = 0;

// 함수 내보내기
export function incrementCounter() {
  counter++;
  return counter;
}

export const greet = (name) => `Hello, ${name}!`;

// 클래스 내보내기
export class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
}

// default 내보내기 (모듈 당 하나만 가능)
export default function sayGoodbye(name) {
  return `Goodbye, ${name}!`;
}

// 다른 이름으로 내보내기 (as)
function privateFunction() {
  console.log("This is private");
}
export { privateFunction as utilityFunction };