// 03-dataTypes.js

/**
 * 데이터 타입 (Data Types)
 * JavaScript의 데이터 타입은 크게 원시 타입과 객체 타입으로 나뉩니다.
 */

// 1. 원시 타입 (Primitive Types)
// - 변경 불가능한 값(immutable)입니다.
// - 변수에 값 자체가 저장됩니다.

// a. String (문자열)
let myName = "Noah";
let greeting = 'Hello, ' + myName + '!';
let templateGreeting = `Welcome, ${myName}!`; // (ES6 템플릿 리터럴)
console.log("String:", greeting, templateGreeting);

// b. Number (숫자)
let age = 30;
let temperature = -2.5;
let infinity = Infinity;
let nan = NaN; // Not a Number
console.log("Number:", age, temperature, infinity, 10 / 0, "text" * 2);

// c. Boolean (불리언)
let isLoggedIn = true;
let isAdmin = false;
console.log("Boolean:", isLoggedIn, isAdmin);

// d. undefined
// - 값이 할당되지 않은 변수의 기본값입니다.
let notAssigned;
console.log("undefined:", notAssigned);

// e. null
// - '값이 없음'을 의도적으로 명시할 때 사용합니다.
let noValue = null;
console.log("null:", noValue);

// f. Symbol (ES6에서 추가)
// - 유일하고 변경 불가능한 기본 값입니다. 주로 객체 속성의 키로 사용됩니다.
const uniqueKey = Symbol("description");
const anotherUniqueKey = Symbol("description");
console.log("Symbol:", uniqueKey === anotherUniqueKey, typeof uniqueKey); // false, symbol


// 2. 객체 타입 (Object/Reference Types)
// - 변경 가능한 값(mutable)입니다.
// - 변수에 값이 저장된 메모리 주소(참조)가 저장됩니다.

// a. Object (객체)
let person = { name: "Alice", age: 25 };
console.log("Object:", person, person.name);

// b. Array (배열)
let fruits = ["apple", "banana", "cherry"];
console.log("Array:", fruits, fruits[0]);

// c. Function (함수) - 함수도 JavaScript에서는 객체의 일종입니다.
function sayHello() { console.log("Hello!"); }
console.log("Function type:", typeof sayHello); // "function"
sayHello();

// typeof 연산자: 데이터 타입을 문자열로 반환합니다.
console.log("typeof null:", typeof null); // "object" (JavaScript의 유명한 버그 중 하나)
console.log("typeof []:", typeof []);     // "object"