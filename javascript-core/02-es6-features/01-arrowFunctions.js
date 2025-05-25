// 02-es6-features/01-arrowFunctions.js

/**
 * 화살표 함수 (Arrow Functions) - ES6
 * - function 키워드 대신 => 를 사용하여 함수를 더 간결하게 표현합니다.
 * - 자체적인 `this`, `arguments`, `super`, `new.target` 바인딩을 갖지 않습니다.
 * - 주로 익명 함수로 사용되며, 메소드가 아닌 함수에 적합합니다.
 */

// 1. 기본 구문
const add = (a, b) => {
  return a + b;
};
console.log("기본 화살표 함수:", add(3, 5)); // 8

// 2. 간결한 구문
// - 함수 본문이 한 줄이고, 그 줄이 반환문이면 중괄호 {} 와 return 키워드 생략 가능
const subtract = (a, b) => a - b;
console.log("간결한 화살표 함수 (반환):", subtract(10, 4)); // 6

// - 매개변수가 하나일 경우 소괄호 () 생략 가능
const square = x => x * x;
console.log("간결한 화살표 함수 (단일 매개변수):", square(7)); // 49

// - 매개변수가 없거나 여러 개일 경우 소괄호 () 필수
const sayHello = () => console.log("Hello!");
sayHello();

// - 객체 리터럴을 반환할 때는 소괄호로 감싸야 함 (중괄호를 코드 블록으로 해석하는 것을 방지)
const createPerson = (name, age) => ({ name: name, age: age });
const person = createPerson("Alice", 30);
console.log("객체 리터럴 반환:", person);

// 3. `this` 바인딩
// - 화살표 함수는 자신만의 `this`를 갖지 않습니다.
// - 화살표 함수 내부의 `this`는 자신을 감싸는 가장 가까운 (non-arrow) 함수의 `this`를 가리킵니다 (Lexical this).
// - 이 특징 때문에 콜백 함수나 메소드 내부의 헬퍼 함수 등에서 유용하게 사용됩니다.

const myObject = {
  value: 42,
  getValueRegular: function() {
    console.log("일반 함수 this.value:", this.value); // 42 (myObject)
    setTimeout(function() {
      // 이 함수는 일반 함수이므로, 호출 방식에 따라 this가 결정됨 (여기서는 window 또는 global)
      console.log("일반 함수 내 setTimeout의 this.value (일반 함수):", this.value); // undefined (브라우저) 또는 global.value
    }, 100);
  },
  getValueArrow: function() {
    console.log("일반 함수 this.value (바깥):", this.value); // 42 (myObject)
    setTimeout(() => {
      // 화살표 함수는 상위 스코프(getValueArrow)의 this를 그대로 사용
      console.log("일반 함수 내 setTimeout의 this.value (화살표 함수):", this.value); // 42
    }, 200);
  }
};

myObject.getValueRegular();
myObject.getValueArrow();

// 주의: 메소드로 화살표 함수를 사용하는 것은 일반적으로 피해야 합니다.
const counter = {
  count: 0,
  increment: () => { // 화살표 함수는 자신만의 this가 없으므로, 여기서 this는 counter 객체를 가리키지 않음!
    // this.count++; // TypeError: Cannot read properties of undefined (reading 'count') 또는 의도치 않은 동작
    // console.log(this.count);
  }
};
// counter.increment();

// 4. `arguments` 객체
// - 화살표 함수는 `arguments` 객체를 바인딩하지 않습니다.
// - 가변 인자를 사용하려면 나머지 매개변수(rest parameters)를 사용해야 합니다. (spreadRest.js 참고)

const noArguments = () => {
  // console.log(arguments); // ReferenceError: arguments is not defined (엄격 모드)
};
noArguments(1, 2, 3);

// 5. `new` 키워드와 함께 사용 불가
// - 화살표 함수는 생성자 함수로 사용할 수 없습니다. (prototype 속성이 없음)
// const MyConstructor = () => {};
// const instance = new MyConstructor(); // TypeError: MyConstructor is not a constructor