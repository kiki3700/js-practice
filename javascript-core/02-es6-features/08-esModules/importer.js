// 02-es6-features/07-esModules/importer.js

// README.md 파일을 참고하여 실행 환경을 설정해주세요.
// (예: package.json에 "type": "module" 추가)

// 이름으로 가져오기 (named import)
import { PI, counter, incrementCounter, greet, Calculator, utilityFunction } from './exporter.js';

// default로 내보낸 값 가져오기 (이름은 자유롭게 지정 가능)
import customGoodbyeFunction from './exporter.js';

// 모듈 전체를 하나의 객체로 가져오기
import * as mathUtils from './exporter.js';

console.log("PI:", PI); // 3.14159

console.log("Initial counter:", counter); // 0
incrementCounter();
console.log("Counter after increment:", counter); // 1 (exporter.js의 counter 값이 변경됨)

console.log(greet("Noah")); // Hello, Noah!

const calc = new Calculator();
console.log("Calculator add(5, 3):", calc.add(5, 3)); // 8

console.log(customGoodbyeFunction("Alice")); // Goodbye, Alice!

utilityFunction(); // This is private (exporter.js에서 privateFunction으로 정의됨)

console.log("\n--- Using * as mathUtils ---");
console.log("mathUtils.PI:", mathUtils.PI);
console.log("mathUtils.greet('Bob'):", mathUtils.greet('Bob'));
const farewell = mathUtils.default("Charlie"); // default export는 'default' 키로 접근
console.log(farewell);