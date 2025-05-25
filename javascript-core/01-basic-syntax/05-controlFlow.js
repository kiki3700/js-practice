// 05-controlFlow.js

/**
 * 조건문 (Conditional Statements)
 * 주어진 조건에 따라 코드의 실행 흐름을 제어합니다.
 */

// 1. if 문
let age = 20;
console.log("if 문 예제:");
if (age >= 19) {
  console.log("성인입니다.");
}

// 2. if-else 문
let temperature = 15;
console.log("\nif-else 문 예제:");
if (temperature > 25) {
  console.log("덥습니다.");
} else {
  console.log("덥지 않습니다.");
}

// 3. if-else if-else 문
let score = 85;
let grade;
console.log("\nif-else if-else 문 예제:");
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}
console.log(`점수: ${score}, 학점: ${grade}`);

// 4. switch 문
// 특정 변수의 값에 따라 다른 코드를 실행할 때 유용합니다.
let fruit = "banana";
console.log("\nswitch 문 예제:");
switch (fruit) {
  case "apple":
    console.log("사과는 1000원입니다.");
    break; // break를 만나면 switch 문을 빠져나옵니다.
  case "banana":
    console.log("바나나는 1500원입니다.");
    break;
  case "orange":
    console.log("오렌지는 2000원입니다.");
    break;
  default: // 모든 case에 해당하지 않을 때 실행
    console.log("해당 과일은 판매하지 않습니다.");
}