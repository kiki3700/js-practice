// 02-variablesScopeHoisting.js

/**
 * var, let, const 차이 (호이스팅, 스코프)
 */

// 1. var
// - 함수 스코프(function scope)를 가집니다.
// - 재선언, 재할당이 가능합니다.
// - 호이스팅 시 선언부는 최상단으로 끌어올려지지만, 할당은 제자리에 남아 undefined로 초기화됩니다.

console.log("var_example (before declaration):", var_example); // undefined (호이스팅)
var var_example = "Hello Var";
var var_example = "Hello Var Again"; // 재선언 가능
var_example = "New Value for Var";   // 재할당 가능
console.log("var_example (after declaration):", var_example);

function varScopeTest() {
  var localVar = "I am local to function";
  if (true) {
    var blockVar = "I am also local to function, not block"; // 함수 스코프
  }
  console.log(localVar);
  console.log(blockVar);
}
varScopeTest();
// console.log(localVar); // Error: localVar is not defined (함수 외부 접근 불가)


// 2. let
// - 블록 스코프(block scope)를 가집니다. (if, for, while 등의 {} 내부)
// - 재선언은 불가능하지만, 재할당은 가능합니다.
// - 호이스팅이 되지만, TDZ(Temporal Dead Zone) 때문에 선언 전에 접근하면 에러가 발생합니다.

// console.log("let_example (before declaration):", let_example); // ReferenceError: Cannot access 'let_example' before initialization (TDZ)
let let_example = "Hello Let";
// let let_example = "Hello Let Again"; // SyntaxError: Identifier 'let_example' has already been declared (재선언 불가)
let_example = "New Value for Let";   // 재할당 가능
console.log("let_example (after declaration):", let_example);

function letScopeTest() {
  let localLet = "I am local to function";
  if (true) {
    let blockLet = "I am local to block"; // 블록 스코프
    console.log(blockLet);
  }
  console.log(localLet);
  // console.log(blockLet); // Error: blockLet is not defined (블록 외부 접근 불가)
}
letScopeTest();


// 3. const
// - 블록 스코프(block scope)를 가집니다.
// - 재선언, 재할당 모두 불가능합니다. (선언과 동시에 초기화해야 함)
// - 호이스팅이 되지만, TDZ 때문에 선언 전에 접근하면 에러가 발생합니다.
// - 객체나 배열의 경우, 내부 값(속성, 요소)은 변경 가능하지만, 변수 자체가 다른 객체/배열을 참조하도록 재할당은 불가능합니다.

// console.log("const_example (before declaration):", const_example); // ReferenceError
const const_example = "Hello Const";
// const const_example = "Hello Const Again"; // SyntaxError: Identifier 'const_example' has already been declared
// const_example = "New Value for Const";   // TypeError: Assignment to constant variable.
console.log("const_example (after declaration):", const_example);

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "new value"; // 객체 내부 속성 변경은 가능
console.log(MY_OBJECT.key);
// MY_OBJECT = { newKey: "newValue" }; // TypeError: Assignment to constant variable. (객체 자체 재할당 불가)

const MY_ARRAY = [1, 2, 3];
MY_ARRAY.push(4); // 배열 내부 요소 변경은 가능
console.log(MY_ARRAY);
// MY_ARRAY = [5, 6, 7]; // TypeError: Assignment to constant variable. (배열 자체 재할당 불가)

/**
 * 호이스팅 (Hoisting)
 * - var 변수 선언과 함수 선언문이 해당 스코프의 최상단으로 끌어올려지는 것처럼 동작하는 현상.
 * - let, const도 호이스팅되지만, TDZ로 인해 선언 전에 접근할 수 없습니다.
 */