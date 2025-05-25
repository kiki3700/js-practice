// 11-prototypes.js

/**
 * 프로토타입 (Prototype)
 * - JavaScript는 프로토타입 기반 객체 지향 언어입니다.
 * - 모든 객체는 자신의 부모 역할을 하는 프로토타입 객체를 가리키는 내부 링크 [[Prototype]] (또는 __proto__)을 갖습니다.
 * - 객체에서 특정 속성이나 메소드를 찾을 때, 해당 객체에 없으면 프로토타입 체인을 따라 올라가며 찾습니다.
 */

// 1. 생성자 함수와 프로토타입
function Person(name, age) {
  this.name = name;
  this.age = age;
  //   this.greet = function() { // 각 인스턴스마다 greet 함수가 생성됨 (메모리 비효율)
  //     console.log(`Hello, my name is ${this.name}`);
  //   };
}

// Person 생성자 함수의 prototype 객체에 메소드를 추가합니다.
// 이렇게 하면 Person의 모든 인스턴스가 이 메소드를 공유하게 됩니다.
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.species = "Homo sapiens"; // 모든 Person 인스턴스가 공유하는 속성

const person1 = new Person("Noah", 30);
const person2 = new Person("Alice", 25);

person1.greet(); // "Hello, my name is Noah and I am 30 years old."
person2.greet(); // "Hello, my name is Alice and I am 25 years old."

console.log(person1.species); // "Homo sapiens"
console.log(person2.species); // "Homo sapiens"

// 인스턴스는 프로토타입의 속성을 직접 수정할 수 없습니다 (섀도잉 발생).
person1.species = "Mutant";
console.log("person1.species:", person1.species); // "Mutant" (person1 객체에 species 속성이 새로 생김)
console.log("person2.species:", person2.species); // "Homo sapiens" (person2는 여전히 프로토타입의 species를 참조)
console.log("Person.prototype.species:", Person.prototype.species); // "Homo sapiens"

// 2. 프로토타입 체인 (Prototype Chain)
console.log("\n프로토타입 체인:");
console.log("person1.__proto__ === Person.prototype:", person1.__proto__ === Person.prototype); // true
console.log("Person.prototype.__proto__ === Object.prototype:", Person.prototype.__proto__ === Object.prototype); // true
console.log("Object.prototype.__proto__:", Object.prototype.__proto__); // null (프로토타입 체인의 최상단)

// person1에서 toString() 메소드를 호출하면,
// 1. person1 객체 자체에서 찾음 (없음)
// 2. person1.__proto__ (Person.prototype)에서 찾음 (없음)
// 3. Person.prototype.__proto__ (Object.prototype)에서 찾음 (있음!) -> 실행
console.log(person1.toString()); // [object Object] (Object.prototype.toString)

// Object.prototype에 메소드를 추가하면 모든 객체에서 사용 가능 (권장하지 않음 - 전역 오염)
// Object.prototype.myCustomMethod = function() { console.log("Custom method!"); };
// person1.myCustomMethod();

// 3. 상속 흉내내기 (프로토타입을 이용한)
function Developer(name, age, skill) {
  Person.call(this, name, age); // Person 생성자 호출하여 name, age 초기화 (this 바인딩)
  this.skill = skill;
}

// Developer.prototype이 Person.prototype을 상속받도록 설정
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer; // constructor를 Developer로 재설정

Developer.prototype.code = function() {
  console.log(`${this.name} is coding using ${this.skill}.`);
};

const dev1 = new Developer("Bob", 35, "JavaScript");
dev1.greet(); // Person.prototype의 greet 메소드 사용 가능
dev1.code();
console.log(dev1.species); // "Homo sapiens" (Person.prototype에서 상속)

console.log("dev1 instanceof Developer:", dev1 instanceof Developer); // true
console.log("dev1 instanceof Person:", dev1 instanceof Person);     // true

// ES6 class 문법은 이러한 프로토타입 기반 상속을 더 쉽게 사용할 수 있도록 하는 문법적 설탕(syntactic sugar)입니다.