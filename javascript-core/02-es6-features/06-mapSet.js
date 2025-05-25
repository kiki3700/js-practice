// 02-es6-features/06-mapSet.js

/**
 * Map - ES6
 * - 키-값 쌍을 저장하는 컬렉션입니다. 객체와 유사하지만, 몇 가지 중요한 차이점이 있습니다.
 *   - 키로 모든 타입의 값을 사용할 수 있습니다 (객체는 문자열 또는 심볼만 가능).
 *   - 요소의 순서가 유지됩니다.
 *   - .size 속성으로 요소의 개수를 쉽게 알 수 있습니다.
 *   - 이터러블(iterable)이며, 직접 순회할 수 있습니다.
 */
console.log("--- Map ---");
const myMap = new Map();

// 요소 추가: set(key, value)
myMap.set("name", "Noah");
myMap.set(1, "one");
const anObjectKey = { id: 1 };
myMap.set(anObjectKey, "This is an object key");

console.log("Map size:", myMap.size); // 3

// 요소 가져오기: get(key)
console.log("myMap.get('name'):", myMap.get("name")); // Noah
console.log("myMap.get(anObjectKey):", myMap.get(anObjectKey)); // This is an object key

// 요소 확인: has(key)
console.log("myMap.has(1):", myMap.has(1)); // true
console.log("myMap.has('age'):", myMap.has("age")); // false

// 요소 삭제: delete(key)
myMap.delete(1);
console.log("After delete(1), myMap.has(1):", myMap.has(1)); // false

// 모든 요소 삭제: clear()
// myMap.clear();
// console.log("After clear(), Map size:", myMap.size); // 0

// Map 순회
console.log("Iterating Map with for...of:");
for (const [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

myMap.forEach((value, key) => {
  console.log(`forEach - Key: ${key}, Value: ${value}`);
});

/**
 * Set - ES6
 * - 중복되지 않는 유일한 값들의 컬렉션입니다.
 * - 값의 순서가 유지됩니다.
 * - 이터러블(iterable)이며, 직접 순회할 수 있습니다.
 */
console.log("\n--- Set ---");
const mySet = new Set();

// 요소 추가: add(value)
mySet.add(1);
mySet.add(5);
mySet.add(5); // 중복된 값은 추가되지 않음
mySet.add("some text");
const anObject = { a: 1, b: 2 };
mySet.add(anObject);
mySet.add(anObject); // 객체는 참조가 다르므로, 같은 내용이라도 다른 객체면 추가됨. 동일 참조는 중복으로 처리.

console.log("Set:", mySet);
console.log("Set size:", mySet.size); // 4 (또는 3, anObject가 동일 참조면)

// 요소 확인: has(value)
console.log("mySet.has(1):", mySet.has(1)); // true
console.log("mySet.has(3):", mySet.has(3)); // false

// 요소 삭제: delete(value)
mySet.delete(5);
console.log("After delete(5), mySet:", mySet);

// Set 순회
console.log("Iterating Set with for...of:");
for (const value of mySet) {
  console.log(value);
}

mySet.forEach(value => {
  console.log(`forEach - Value: ${value}`);
});

// 배열에서 중복 제거에 유용
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const uniqueNumbers = [...new Set(numbers)]; // Set으로 변환 후 다시 배열로
console.log("Unique numbers from array:", uniqueNumbers); // [ 2, 3, 4, 5, 6, 7 ]