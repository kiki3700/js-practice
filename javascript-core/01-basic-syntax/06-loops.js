// 06-loops.js

/**
 * 반복문 (Loops)
 * 특정 코드 블록을 여러 번 실행할 때 사용됩니다.
 */

// 1. for 문
// - 특정 횟수만큼 코드를 반복 실행할 때 주로 사용됩니다.
console.log("for 문 예제:");
for (let i = 0; i < 5; i++) { // 초기화; 조건식; 증감식
  console.log(`현재 i 값: ${i}`);
}

// 배열과 for 문
const fruits = ["apple", "banana", "cherry"];
console.log("\n배열과 for 문:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. while 문
// - 조건이 참인 동안 코드를 반복 실행합니다.
console.log("\nwhile 문 예제:");
let count = 0;
while (count < 3) {
  console.log(`현재 count 값: ${count}`);
  count++;
}

// 3. do...while 문
// - 코드를 먼저 한 번 실행한 후, 조건을 검사하여 반복 여부를 결정합니다.
// - 조건이 처음부터 거짓이더라도 최소 한 번은 실행됩니다.
console.log("\ndo...while 문 예제:");
let num = 5;
do {
  console.log(`현재 num 값: ${num}`);
  num++;
} while (num < 5); // 조건이 거짓이지만, 한 번 실행됨

// 4. break 와 continue
// - break: 현재 실행 중인 반복문을 즉시 종료합니다.
// - continue: 현재 반복문의 나머지 부분을 건너뛰고 다음 반복을 시작합니다.
console.log("\nbreak 와 continue 예제:");
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // i가 3일 때는 console.log를 건너뜀
  }
  if (i === 7) {
    break; // i가 7일 때 반복문 종료
  }
  console.log(i); // 0, 1, 2, 4, 5, 6 출력
}