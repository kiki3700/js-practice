// 02-es6-features/03-destructuring.js

/**
 * 구조 분해 할당 (Destructuring Assignment) - ES6
 * - 배열이나 객체의 속성을 분해하여 그 값을 개별 변수에 쉽게 할당할 수 있는 문법입니다.
 */

// 1. 배열 구조 분해 (Array Destructuring)
const fruits = ["apple", "banana", "cherry", "date"];

// 이전 방식
// const firstFruit = fruits[0];
// const secondFruit = fruits[1];

// 구조 분해 할당 사용
const [first, second, third] = fruits;
console.log("배열 구조 분해:", first, second, third); // apple banana cherry

// 특정 요소 건너뛰기
const [, , , fourth] = fruits;
console.log("건너뛰기:", fourth); // date

// 나머지 요소들을 배열로 받기 (Rest syntax와 함께 사용)
const [mainFruit, ...otherFruits] = fruits;
console.log("나머지 요소:", mainFruit, otherFruits); // apple [ 'banana', 'cherry', 'date' ]

// 기본값 할당
const colors = ["red"];
const [primaryColor, secondaryColor = "blue"] = colors;
console.log("기본값 할당:", primaryColor, secondaryColor); // red blue

const [c1, c2 = "green", c3 = "yellow"] = ["red"];
console.log("기본값 할당 (여러 개):", c1, c2, c3); // red green yellow

// 변수 값 교환 (Swap)
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log("값 교환:", a, b); // 20 10


// 2. 객체 구조 분해 (Object Destructuring)
const person = {
  name: "Noah",
  age: 30,
  city: "Seoul",
  country: "Korea"
};

// 이전 방식
// const personName = person.name;
// const personAge = person.age;

// 구조 분해 할당 사용 (변수 이름이 객체의 키 이름과 동일해야 함)
const { name, age } = person;
console.log("객체 구조 분해:", name, age); // Noah 30

// 다른 이름의 변수에 할당
const { name: fullName, city: currentCity } = person;
console.log("다른 이름으로 할당:", fullName, currentCity); // Noah Seoul

// 기본값 할당
const { job = "Developer", country } = person;
console.log("객체 기본값 할당:", job, country); // Developer Korea

// 중첩된 객체 구조 분해
const user = {
  id: 1,
  info: {
    username: "noah_js",
    email: "noah@example.com"
  }
};
const { id, info: { username, email } } = user;
console.log("중첩 객체 구조 분해:", id, username, email); // 1 noah_js noah@example.com

// 함수 매개변수에서의 구조 분해
function printPersonInfo({ name, age, city = "Unknown" }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
printPersonInfo(person); // Name: Noah, Age: 30, City: Seoul
printPersonInfo({ name: "Alice", age: 25 }); // Name: Alice, Age: 25, City: Unknown