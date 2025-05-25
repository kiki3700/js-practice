// 02-es6-features/05-classes.js

/**
 * 클래스 (Class) - ES6
 * - 객체 지향 프로그래밍을 위한 문법적 설탕(syntactic sugar)입니다.
 * - 내부적으로는 프로토타입 기반으로 동작합니다.
 * - 코드를 더 명확하고 구조적으로 만들 수 있게 도와줍니다.
 */

class Person {
  // 생성자 (constructor)
  // - 클래스의 인스턴스가 생성될 때 호출되는 특별한 메소드입니다.
  // - 인스턴스의 초기 상태를 설정합니다.
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.species = "Homo sapiens"; // 모든 인스턴스가 갖는 속성
  }

  // 메소드 (Methods)
  // - 클래스 프로토타입에 추가됩니다. (Person.prototype.greet)
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // 정적 메소드 (Static Methods)
  // - 클래스 자체에 바인딩되는 메소드입니다. 인스턴스를 통해 호출할 수 없습니다.
  // - 유틸리티 함수나 클래스 레벨의 작업을 수행할 때 사용됩니다.
  static getSpeciesDescription() {
    return "Humans are highly intelligent primates.";
  }

  // Getter 와 Setter
  get fullName() {
    return `${this.name} (age: ${this.age})`;
  }

  set changeName(newName) {
    if (newName.trim() === "") {
      console.error("Name cannot be empty.");
      return;
    }
    this.name = newName;
  }
}

// 인스턴스 생성
const person1 = new Person("Noah", 30);
const person2 = new Person("Alice", 25);

person1.greet(); // Hello, my name is Noah and I am 30 years old.
person2.greet(); // Hello, my name is Alice and I am 25 years old.

console.log(person1.species); // Homo sapiens

// 정적 메소드 호출
console.log(Person.getSpeciesDescription()); // Humans are highly intelligent primates.
// person1.getSpeciesDescription(); // TypeError: person1.getSpeciesDescription is not a function

// Getter 사용
console.log(person1.fullName); // Noah (age: 30)

// Setter 사용
person1.changeName = "Noah Kim";
person1.greet(); // Hello, my name is Noah Kim and I am 30 years old.
person1.changeName = "  "; // Name cannot be empty.


// 클래스 상속 (Inheritance)
class Developer extends Person { // Person 클래스를 상속받음
  constructor(name, age, skill) {
    super(name, age); // 부모 클래스의 생성자 호출 (Person.constructor)
    this.skill = skill; // Developer 클래스만의 속성 추가
  }

  // 메소드 오버라이딩 (Method Overriding)
  greet() {
    super.greet(); // 부모 클래스의 greet 메소드 호출
    console.log(`I am a developer skilled in ${this.skill}.`);
  }

  code() {
    console.log(`${this.name} is coding using ${this.skill}.`);
  }
}

const dev1 = new Developer("Bob", 35, "JavaScript");
dev1.greet();
// Hello, my name is Bob and I am 35 years old.
// I am a developer skilled in JavaScript.
dev1.code(); // Bob is coding using JavaScript.

console.log(dev1 instanceof Developer); // true
console.log(dev1 instanceof Person);    // true