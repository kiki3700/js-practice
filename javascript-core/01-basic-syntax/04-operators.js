// 04-operators.js

/**
 * 연산자 (Operators)
 * 프로그램에서 데이터를 조작하고 계산하는 데 사용되는 기호입니다.
 */

// 1. 산술 연산자 (Arithmetic Operators)
let a = 10;
let b = 4;
console.log("산술 연산자:");
console.log("a + b =", a + b); // 덧셈: 14
console.log("a - b =", a - b); // 뺄셈: 6
console.log("a * b =", a * b); // 곱셈: 40
console.log("a / b =", a / b); // 나눗셈: 2.5
console.log("a % b =", a % b); // 나머지: 2
console.log("a ** b =", a ** b); // 거듭제곱 (ES7): 10000

let counter = 0;
counter++; // 증가 연산자 (counter = counter + 1)
console.log("counter++:", counter); // 1
counter--; // 감소 연산자 (counter = counter - 1)
console.log("counter--:", counter); // 0

// 2. 할당 연산자 (Assignment Operators)
let x = 5;
x += 3; // x = x + 3;  (x는 8)
console.log("x += 3:", x);
x -= 2; // x = x - 2;  (x는 6)
console.log("x -= 2:", x);
x *= 4; // x = x * 4;  (x는 24)
console.log("x *= 4:", x);
x /= 3; // x = x / 3;  (x는 8)
console.log("x /= 3:", x);

// 3. 비교 연산자 (Comparison Operators)
let val1 = 10;
let val2 = "10";
let val3 = 20;
console.log("\n비교 연산자:");
console.log("val1 == val2:", val1 == val2);   // true (값만 비교, 타입 변환 발생)
console.log("val1 === val2:", val1 === val2); // false (값과 타입 모두 비교)
console.log("val1 != val2:", val1 != val2);   // false
console.log("val1 !== val2:", val1 !== val2); // true
console.log("val1 > val3:", val1 > val3);     // false
console.log("val1 < val3:", val1 < val3);     // true
console.log("val1 >= 10:", val1 >= 10);   // true
console.log("val1 <= 10:", val1 <= 10);   // true

// 4. 논리 연산자 (Logical Operators)
let isTrue = true;
let isFalse = false;
console.log("\n논리 연산자:");
console.log("isTrue && isFalse:", isTrue && isFalse); // AND: false
console.log("isTrue || isFalse:", isTrue || isFalse); // OR: true
console.log("!isTrue:", !isTrue);                   // NOT: false

// 5. 삼항 연산자 (Ternary Operator)
// 조건 ? 참일 때 값 : 거짓일 때 값
let age = 20;
let type = age >= 19 ? "성인" : "미성년자";
console.log("\n삼항 연산자:", type); // 성인

// 6. typeof 연산자 (이미 dataTypes.js에서 다룸)
console.log("\ntypeof 연산자:");
console.log("typeof 123:", typeof 123);       // "number"
console.log("typeof 'hello':", typeof 'hello'); // "string"
console.log("typeof true:", typeof true);     // "boolean"