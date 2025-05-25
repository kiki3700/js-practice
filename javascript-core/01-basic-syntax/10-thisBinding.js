// 10-thisBinding.js

/**
 * this 바인딩
 * - JavaScript에서 'this'는 함수가 호출되는 방식에 따라 동적으로 결정됩니다.
 * - Java나 Python의 'this'/'self'와는 다르게 동작하므로 주의해야 합니다.
 */

console.log("1. 전역 컨텍스트에서의 this:");
// 브라우저 환경: window 객체
// Node.js 환경 (최상위 스코프): module.exports (또는 빈 객체 {})
console.log(this);

// 2. 일반 함수 호출에서의 this
function showThis() {
  console.log("2. 일반 함수 호출 this:", this);
}
showThis(); // 브라우저: window (엄격 모드 'use strict'에서는 undefined)
// Node.js: global 객체

('use strict');
function showThisStrict() {
  console.log("2a. 일반 함수 호출 (엄격 모드) this:", this); // undefined
}
showThisStrict();

// 3. 메소드 호출에서의 this
const myObject = {
  name: "MyObject",
  greet: function () {
    console.log("3. 메소드 호출 this:", this); // myObject를 가리킴
    console.log(`Hello, I am ${this.name}`);
  }
};
myObject.greet();

const anotherObject = { name: "AnotherObject" };
anotherObject.greet = myObject.greet;
anotherObject.greet(); // this는 anotherObject를 가리킴

// 4. 생성자 함수 호출에서의 this
function Person(name, age) {
  // new 키워드로 호출되면, this는 새로 생성되는 객체를 가리킵니다.
  this.name = name;
  this.age = age;
  console.log("4. 생성자 함수 this:", this);
}
const person1 = new Person("Noah", 30);
console.log(person1.name, person1.age);

// const person2 = Person("Alice", 25); // new 없이 호출하면 일반 함수 호출처럼 동작
// console.log(global.name); // Node.js 환경에서 global.name이 "Alice"로 설정될 수 있음 (위험!)

// 5. call, apply, bind 메소드를 사용한 명시적 this 바인딩
const obj1 = { value: 10 };
const obj2 = { value: 20 };

function getValue() {
  console.log("5. 명시적 바인딩 this.value:", this.value);
}

getValue.call(obj1);    // getValue 함수의 this를 obj1로 설정하여 호출
getValue.call(obj2);    // getValue 함수의 this를 obj2로 설정하여 호출

function sum(a, b) {
  console.log("5. 명시적 바인딩 (sum) this.value:", this.value);
  return a + b + (this.value || 0);
}

console.log("sum.call(obj1, 3, 5):", sum.call(obj1, 3, 5));     // 10 + 3 + 5 = 18
console.log("sum.apply(obj2, [7, 2]):", sum.apply(obj2, [7, 2])); // 20 + 7 + 2 = 29 (apply는 인자를 배열로 전달)

const boundGetValueToObj1 = getValue.bind(obj1); // getValue의 this를 obj1로 영구히 바인딩한 새 함수 반환
boundGetValueToObj1(); // this는 항상 obj1

const boundSumToObj2 = sum.bind(obj2, 1, 2); // this와 초기 인자까지 바인딩 가능
console.log("boundSumToObj2():", boundSumToObj2()); // 20 + 1 + 2 = 23
console.log("boundSumToObj2(10, 20):", boundSumToObj2(10, 20)); // 바인딩된 1, 2가 우선. 20 + 1 + 2 = 23

const boundSumToObj2Partial = sum.bind(obj2);
console.log("boundSumToObj2Partial(10, 20):", boundSumToObj2Partial(10, 20)); // 20 + 10 + 20 = 50

// 6. 화살표 함수의 this
// - 화살표 함수는 자신만의 this를 갖지 않습니다.
// - 화살표 함수 내부의 this는 자신을 감싸는 가장 가까운 (non-arrow) 함수의 this를 가리킵니다 (Lexical this).
// - (자세한 내용은 02-es6-features/01-arrowFunctions.js 에서 다룹니다.)

console.log("\n--- this 바인딩은 JavaScript의 중요한 개념이므로, 다양한 상황에서 어떻게 동작하는지 충분히 연습해야 합니다. ---");