// 02-es6-features/07-arrayMethods.js

/**
 * 주요 배열 메서드 (Array Methods)
 * - JavaScript 배열은 데이터를 효율적으로 처리할 수 있는 다양한 내장 메서드를 제공합니다.
 * - 이 메서드들은 반복문을 직접 작성하는 것보다 코드를 간결하고 가독성 있게 만들어줍니다.
 * - 대부분의 메서드는 원본 배열을 변경하지 않고 새로운 배열이나 값을 반환합니다 (immutable-like).
 */

const numbers = [1, 2, 3, 4, 5];
const users = [
  { id: 1, name: "Noah", age: 30, isActive: true },
  { id: 2, name: "Alice", age: 25, isActive: false },
  { id: 3, name: "Bob", age: 35, isActive: true },
  { id: 4, name: "Charlie", age: 20, isActive: false },
];

console.log("--- 1. forEach() ---");
// - 배열의 각 요소에 대해 주어진 함수를 실행합니다.
// - 반환 값은 없습니다 (undefined).
// - 단순 반복 실행에 사용됩니다.
numbers.forEach((number, index, array) => {
  console.log(`Index ${index}: ${number} (from array: [${array}])`);
});
// users.forEach(user => console.log(user.name));


console.log("\n--- 2. map() ---");
// - 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 모아 새로운 배열을 반환합니다.
// - 원본 배열의 각 요소를 변환하여 새로운 배열을 만들 때 사용됩니다.
const squaredNumbers = numbers.map(number => number * number);
console.log("Squared numbers:", squaredNumbers); // [ 1, 4, 9, 16, 25 ]
console.log("Original numbers:", numbers);   // 원본 배열은 변경되지 않음

const userNames = users.map(user => user.name);
console.log("User names:", userNames); // [ 'Noah', 'Alice', 'Bob', 'Charlie' ]

const userInfos = users.map(user => `User ${user.name} is ${user.age} years old.`);
console.log("User infos:", userInfos);


console.log("\n--- 3. filter() ---");
// - 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과가 true인 요소들만 모아 새로운 배열을 반환합니다.
// - 특정 조건을 만족하는 요소들만 선택하여 새로운 배열을 만들 때 사용됩니다.
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers); // [ 2, 4 ]

const activeUsers = users.filter(user => user.isActive);
console.log("Active users:", activeUsers.map(u => u.name)); // [ 'Noah', 'Bob' ]

const usersOver28 = users.filter(user => user.age > 28);
console.log("Users over 28:", usersOver28.map(u => u.name)); // [ 'Noah', 'Bob' ]


console.log("\n--- 4. reduce() ---");
// - 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하여 하나의 결과값을 반환합니다.
// - 배열의 모든 요소를 사용하여 누적된 값을 계산할 때 사용됩니다.
// - reduce(callbackFunction, initialValue)
//   - callbackFunction: (accumulator, currentValue, currentIndex, array) => ...
//   - initialValue: 초기 누산기 값 (선택 사항)

// 모든 숫자의 합계 구하기
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0); // 초기값 0부터 시작
console.log("Sum of numbers:", sumOfNumbers); // 15

// 모든 유저의 나이 합계 구하기
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total age of users:", totalAge); // 30 + 25 + 35 + 20 = 110

// 가장 나이가 많은 유저 찾기 (객체 반환)
const oldestUser = users.reduce((oldest, currentUser) => {
  return (currentUser.age > oldest.age) ? currentUser : oldest;
}, users[0]); // 첫 번째 유저를 초기값으로 설정
console.log("Oldest user:", oldestUser);


console.log("\n--- 5. find() ---");
// - 배열의 각 요소에 대해 주어진 판별 함수를 실행하고, 그 결과가 true인 첫 번째 요소의 값을 반환합니다.
// - 조건에 맞는 요소를 찾으면 즉시 검색을 중단하고 해당 요소를 반환합니다. 없으면 undefined를 반환합니다.
const firstNumberGreaterThan3 = numbers.find(number => number > 3);
console.log("First number greater than 3:", firstNumberGreaterThan3); // 4

const userAlice = users.find(user => user.name === "Alice");
console.log("User Alice:", userAlice);

const userDavid = users.find(user => user.name === "David");
console.log("User David:", userDavid); // undefined


console.log("\n--- 기타 유용한 메서드들 ---");
// - findIndex(): find()와 유사하지만, 첫 번째 요소의 인덱스를 반환합니다. 없으면 -1을 반환합니다.
const indexOfAlice = users.findIndex(user => user.name === "Alice");
console.log("Index of Alice:", indexOfAlice); // 1

// - some(): 배열의 요소 중 하나라도 주어진 판별 함수를 통과하면 true를 반환합니다.
const hasAdminUser = users.some(user => user.name === "Noah" && user.age > 20);
console.log("Has admin user (Noah over 20)?", hasAdminUser); // true

// - every(): 배열의 모든 요소가 주어진 판별 함수를 통과하면 true를 반환합니다.
const allUsersActive = users.every(user => user.isActive);
console.log("Are all users active?", allUsersActive); // false

console.log("\n이 외에도 sort(), includes(), join(), slice(), splice() 등 다양한 배열 메서드가 있습니다.");
console.log("MDN 문서를 참고하여 각 메서드의 사용법을 익히는 것이 좋습니다.");