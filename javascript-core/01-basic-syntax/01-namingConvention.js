/**
 * JavaScript Naming convention
 * 
 * 1. Variables: camelCase
 * 2. Functions: camelCase
 * 3. Classes: PascalCase
 * 4. Constatns: SCREAMING_SNAKE_CASE
 * 5. Objec Properties: camelCase
 * 6. FileName: camelcase
 * 7. Foldername: kebob-case
 * 8. Componant: PascalCase
 */
// --- 1. 변수 네이밍 (camelCase) ---

// 일반적인 변수
let userName = "Alice";
let userAge = 30;
let isStudent = false; // 불리언 변수는 'is', 'has', 'can' 등으로 시작

// 복합 단어 변수
let httpRequestTimeout = 5000;
let totalUserCount = 100;

console.log("--- 변수 예시 ---");
console.log(`userName: ${userName}`);
console.log(`userAge: ${userAge}`);
console.log(`isStudent: ${isStudent}`);
console.log(`httpRequestTimeout: ${httpRequestTimeout}`);
console.log(`totalUserCount: ${totalUserCount}`);


// --- 2. 함수 네이밍 (camelCase) ---

// 데이터 가져오는 함수
function getUserData(userId) {
  // 실제로는 데이터베이스나 API에서 데이터를 가져오는 로직
  console.log(`\n사용자 ID ${userId}의 데이터를 가져옵니다.`);
  return { id: userId, name: "Charlie", email: `charlie${userId}@example.com` };
}

// 값 계산하는 함수
function calculateTotalPrice(price, quantity) {
  console.log(`\n총 가격을 계산합니다: ${price} * ${quantity}`);
  return price * quantity;
}

// 어떤 동작을 수행하는 함수
function displayMessage(message) {
  console.log(`\n메시지 표시: ${message}`);
}

console.log("\n--- 함수 예시 ---");
const userProfile = getUserData(1);
console.log("가져온 사용자:", userProfile);
const total = calculateTotalPrice(100, 5);
console.log("계산된 총 가격:", total);
displayMessage("환영합니다!");


// --- 3. 클래스 네이밍 (PascalCase) ---

// 사용자 정보를 나타내는 클래스
class UserProfile {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // 클래스 내부 메서드 (camelCase)
  getGreeting() {
    return `안녕하세요, ${this.name}님!`;
  }
}

// 서비스 로직을 담당하는 클래스
class ProductService {
  constructor() {
    this.products = [
      { id: 1, name: "Laptop", price: 1200 },
      { id: 2, name: "Mouse", price: 25 }
    ];
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }
}

console.log("\n--- 클래스 예시 ---");
const user1 = new UserProfile("Bob", "bob@example.com");
console.log(user1.getGreeting());

const productService = new ProductService();
const foundProduct = productService.getProductById(1);
console.log("찾은 제품:", foundProduct);


// --- 4. 상수 네이밍 (SCREAMING_SNAKE_CASE) ---

// 애플리케이션 전반에 걸쳐 변하지 않는 고정 값
const MAX_CONCURRENT_CONNECTIONS = 100;
const DATABASE_URL = "mongodb://localhost:27017/mydb"; // 환경 변수로 관리하는 것이 더 좋음
const DEFAULT_TIMEOUT_MS = 3000;

console.log("\n--- 상수 예시 ---");
console.log("최대 연결 수:", MAX_CONCURRENT_CONNECTIONS);
console.log("기본 데이터베이스 URL:", DATABASE_URL);
console.log("기본 타임아웃:", DEFAULT_TIMEOUT_MS);


// --- 5. 객체 속성 네이밍 (camelCase) ---
// (위 클래스 및 변수 예시에서 이미 사용됨)

const user = {
  firstName: "Jane",
  lastName: "Doe",
  emailAddress: "jane.doe@example.com",
  // 메서드도 camelCase
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("\n--- 객체 속성 예시 ---");
console.log("사용자 이름:", user.firstName);
console.log("전체 이름:", user.getFullName());


// --- 6. 비공개(Private) 속성/메서드 (선택적: _prefixCamelCase 또는 #privateName) ---

// 일반적인 _ 접두사 (관례)
class Counter {
  constructor() {
    this._count = 0; // 이 속성은 외부에서 직접 접근하지 않는 것이 관례임을 나타냄
  }

  increment() {
    this._count++;
  }

  getCount() {
    return this._count;
  }
}

// ES2022에서 도입된 진짜 private 필드 (#)
class SafeCounter {
  #count = 0; // #을 붙여 진짜 private 필드 선언

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

console.log("\n--- 비공개 속성/메서드 예시 ---");
const counter = new Counter();
counter.increment();
console.log("카운터 (관례):", counter.getCount());
// console.log(counter._count); // 접근은 가능하나, 하지 않는 것이 관례

const safeCounter = new SafeCounter();
safeCounter.increment();
console.log("카운터 (진짜 private):", safeCounter.getCount());
