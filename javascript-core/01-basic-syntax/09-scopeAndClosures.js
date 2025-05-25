// 09-scopeAndClosures.js

/**
 * 스코프 (Scope)
 * - 변수와 함수에 접근할 수 있는 유효 범위를 의미합니다.
 * - JavaScript에는 전역 스코프(Global Scope)와 지역 스코프(Local Scope)가 있습니다.
 * - 지역 스코프는 함수 스코프(Function Scope)와 블록 스코프(Block Scope - ES6 let, const)로 나뉩니다.
 */

// 1. 전역 스코프 (Global Scope)
let globalVar = "I am global";

function checkGlobalScope() {
  console.log("Inside function:", globalVar); // 함수 내에서 전역 변수 접근 가능
}
checkGlobalScope();
console.log("Outside function:", globalVar);

// 2. 함수 스코프 (Function Scope) - var 키워드로 선언된 변수
function functionScopeExample() {
  var functionScopedVar = "I am function-scoped";
  console.log(functionScopedVar);

  if (true) {
    var blockScopedVarWithVar = "I am also function-scoped (declared with var)";
    console.log(blockScopedVarWithVar);
  }
  console.log(blockScopedVarWithVar); // if 블록 밖에서도 접근 가능
}
functionScopeExample();
// console.log(functionScopedVar); // Error: functionScopedVar is not defined (함수 외부 접근 불가)

// 3. 블록 스코프 (Block Scope) - let, const 키워드로 선언된 변수
function blockScopeExample() {
  let blockScopedVar = "I am in function, but let's see block scope";
  if (true) {
    let innerBlockVar = "I am block-scoped (declared with let)";
    const innerConstVar = "I am also block-scoped (declared with const)";
    console.log(innerBlockVar);
    console.log(innerConstVar);
  }
  // console.log(innerBlockVar); // Error: innerBlockVar is not defined (블록 외부 접근 불가)
  console.log(blockScopedVar);
}
blockScopeExample();

/**
 * 클로저 (Closure)
 * - 함수와 그 함수가 선언될 당시의 렉시컬 환경(Lexical Environment)의 조합입니다.
 * - 내부 함수가 외부 함수의 스코프에 있는 변수에 접근할 수 있게 해줍니다.
 * - 외부 함수가 실행을 마친 후에도 내부 함수는 외부 함수의 변수를 참조할 수 있습니다.
 */

function outerFunction(outerVariable) {
  // 이 outerVariable은 아래 innerFunction의 클로저에 의해 기억됩니다.
  return function innerFunction(innerVariable) {
    console.log("Outer variable:", outerVariable);
    console.log("Inner variable:", innerVariable);
    return outerVariable + innerVariable;
  };
}

const newFunction = outerFunction(10); // outerFunction 실행, innerFunction 반환
                                       // newFunction은 클로저를 형성

console.log("Closure result 1:", newFunction(5));  // 10 (outer) + 5 (inner) = 15
console.log("Closure result 2:", newFunction(20)); // 10 (outer) + 20 (inner) = 30

// 클로저의 활용: 데이터 은닉, 상태 유지, 커링(currying) 등
function createCounter() {
  let count = 0; // 비공개 변수처럼 사용 (외부에서 직접 접근 불가)
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log("Counter 1:", counter1()); // 1
console.log("Counter 1:", counter1()); // 2

const counter2 = createCounter(); // 새로운 클로저 환경 생성
console.log("Counter 2:", counter2()); // 1