// 01-namingConvention.js

/**
 * 네이밍 컨벤션 (Naming Convention)
 *
 * 코드의 가독성을 높이고 일관성을 유지하기 위해 변수, 함수, 클래스 등의 이름을 짓는 규칙입니다.
 * JavaScript에서는 주로 다음과 같은 컨벤션이 사용됩니다.
 */

// 1. Camel Case (카멜 케이스)
// - 변수명, 함수명, 메소드명에 주로 사용됩니다.
// - 첫 단어는 소문자로 시작하고, 이후 각 단어의 첫 글자는 대문자로 작성합니다.
let myVariableName = "someValue";
function calculateTotalPrice(price, quantity) {
  return price * quantity;
}

// 2. Pascal Case (파스칼 케이스)
// - 클래스명, 생성자 함수명에 주로 사용됩니다.
// - 모든 단어의 첫 글자를 대문자로 작성합니다.
class UserProfile {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 3. UPPER_SNAKE_CASE (대문자 스네이크 케이스)
// - 상수(constants)명에 주로 사용됩니다.
// - 모든 글자를 대문자로 작성하고, 단어 사이는 밑줄(_)로 구분합니다.
const MAX_USERS = 100;
const API_KEY = "YOUR_API_KEY_HERE";

console.log(myVariableName, MAX_USERS);
const user = new UserProfile("Noah", 30);
console.log(user.name);
console.log(calculateTotalPrice(1000, 5));