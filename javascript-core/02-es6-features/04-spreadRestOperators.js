// 02-es6-features/04-spreadRestOperators.js

/**
 * 스프레드 연산자 (Spread Operator) ...
 * - 배열이나 객체, 문자열 등 반복 가능한(iterable) 객체를 "펼쳐서" 개별 요소로 만듭니다.
 * - 주로 배열이나 객체를 복사하거나, 합치거나, 함수의 인자로 전달할 때 사용됩니다.
 */

console.log("--- 스프레드 연산자 (Spread Operator) ---");

// 1. 배열에서의 사용
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 배열 합치기
const combinedArray = [...arr1, ...arr2, 7, 8];
console.log("배열 합치기:", combinedArray); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 배열 복사 (얕은 복사, shallow copy)
const originalArray = ["a", "b", "c"];
const copiedArray = [...originalArray];
copiedArray.push("d");
console.log("원본 배열:", originalArray); // [ 'a', 'b', 'c' ] (원본 불변)
console.log("복사된 배열:", copiedArray); // [ 'a', 'b', 'c', 'd' ]

// 함수 인자로 전달
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [10, 20, 30];
console.log("함수 인자 전달 (spread):", sum(...numbers)); // 60

// 2. 객체에서의 사용 (ES2018 / ES9)
const obj1 = { name: "Noah", age: 30 };
const obj2 = { city: "Seoul", job: "Developer" };

// 객체 합치기 (같은 키가 있으면 뒤에 오는 객체의 값으로 덮어씀)
const mergedObject = { ...obj1, ...obj2, country: "Korea" };
console.log("객체 합치기:", mergedObject); // { name: 'Noah', age: 30, city: 'Seoul', job: 'Developer', country: 'Korea' }

const objWithOverride = { ...obj1, age: 31, ...obj2 };
console.log("객체 덮어쓰기:", objWithOverride); // { name: 'Noah', age: 31, city: 'Seoul', job: 'Developer' }

// 객체 복사 (얕은 복사)
const originalObject = { a: 1, b: { c: 2 } };
const copiedObject = { ...originalObject };
copiedObject.a = 100;
copiedObject.b.c = 200; // 중첩된 객체는 참조를 공유 (얕은 복사)
console.log("원본 객체:", originalObject); // { a: 1, b: { c: 200 } }
console.log("복사된 객체:", copiedObject); // { a: 100, b: { c: 200 } }

/**
 * 레스트 매개변수 (Rest Parameters) ...
 * - 함수의 매개변수 목록에서 사용되며, 정해지지 않은 수의 인자들을 배열로 모읍니다.
 * - 반드시 마지막 매개변수여야 합니다.
 */

console.log("\n--- 레스트 매개변수 (Rest Parameters) ---");

function printArguments(firstArg, ...restArgs) { // restArgs는 배열
  console.log("첫 번째 인자:", firstArg);
  console.log("나머지 인자들 (배열):", restArgs);
  console.log("나머지 인자들의 합:", restArgs.reduce((sum, current) => sum + current, 0));
}

printArguments("Hello", 1, 2, 3, 4, 5);
// 첫 번째 인자: Hello
// 나머지 인자들 (배열): [ 1, 2, 3, 4, 5 ]
// 나머지 인자들의 합: 15

printArguments(100);
// 첫 번째 인자: 100
// 나머지 인자들 (배열): []
// 나머지 인자들의 합: 0