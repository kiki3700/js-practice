# import/export (ES Modules)

-   **설명:**
    ECMAScript 표준 모듈 시스템(ESM)은 JavaScript 언어 자체에 내장된 공식 모듈 시스템입니다. CommonJS와는 다른 문법과 동작 방식을 가지며, 현대 JavaScript 개발(브라우저 포함)에서 점차 표준으로 자리 잡고 있습니다. Node.js도 ES 모듈을 적극적으로 지원하고 있습니다.

    -   **`export` (모듈 내용 내보내기):**
        -   모듈에서 외부로 공개하고 싶은 변수, 함수, 클래스 등을 지정합니다.
        -   **Named Exports (이름 지정 내보내기):** 여러 개의 값을 각자의 이름으로 내보낼 수 있습니다.
            ```javascript
            // lib/math.mjs
            export const PI = 3.14159;

            export function add(a, b) {
              return a + b;
            }

            export class Calculator {
              constructor() {
                this.result = 0;
              }
              add(value) {
                this.result += value;
              }
              getResult() {
                return this.result;
              }
            }
            ```
        -   **Default Export (기본 내보내기):** 모듈에서 단 하나의 값을 대표로 내보낼 때 사용합니다. 파일당 하나의 default export만 가능합니다.
            ```javascript
            // lib/logger.mjs
            export default function log(message) {
              console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
            }
            ```

    -   **`import` (모듈 가져오기):**
        -   다른 모듈에서 `export`된 기능들을 현재 모듈로 불러옵니다.
        -   **Named Imports:** 중괄호 `{}`를 사용하여 특정 이름으로 내보내진 값들을 가져옵니다.
            ```javascript
            // app.mjs
            import { PI, add, Calculator } from './lib/math.mjs'; // .mjs 확장자 명시

            console.log(PI); // 3.14159
            console.log(add(10, 5)); // 15

            const calc = new Calculator();
            calc.add(10);
            console.log(calc.getResult()); // 10
            ```
        -   **Default Import:** `default export`로 내보내진 값을 가져옵니다. 중괄호 없이 원하는 이름으로 받을 수 있습니다.
            ```javascript
            // app.mjs
            import myCustomLogger from './lib/logger.mjs';

            myCustomLogger('Application started.');
            ```
        -   **모든 Named Exports를 하나의 객체로 가져오기 (Namespace Import):**
            ```javascript
            // app.mjs
            import * as mathUtils from './lib/math.mjs';

            console.log(mathUtils.PI);
            console.log(mathUtils.add(3, 4));
            const anotherCalc = new mathUtils.Calculator();
            ```

    -   **Node.js에서 ES 모듈 사용하기:**
        1.  **파일 확장자 `.mjs` 사용:** 가장 간단한 방법입니다. Node.js는 `.mjs` 파일을 ES 모듈로 인식합니다.
            ```
            // my-module.mjs
            export const message = "Hello from ES Module!";

            // main.mjs
            import { message } from './my-module.mjs';
            console.log(message);
            ```
        2.  **`package.json`에 `"type": "module"` 설정:** 프로젝트 내의 `.js` 파일들을 기본적으로 ES 모듈로 취급하게 합니다. 이 경우 CommonJS 모듈은 `.cjs` 확장자를 사용해야 합니다.
            ```json
            // package.json
            {
              "name": "my-es-project",
              "version": "1.0.0",
              "type": "module", // 이 부분을 추가!
              "main": "main.js"
            }
            ```
            ```javascript
            // my-module.js (이제 .js도 ESM으로 인식)
            export const message = "Hello from ES Module!";

            // main.js
            import { message } from './my-module.js'; // .js 확장자 사용 가능
            console.log(message);
            ```

    -   **정적 구조 (Static Structure):**
        -   ES 모듈은 `import`와 `export`문이 코드의 최상위 레벨에만 위치해야 합니다. (조건문이나 함수 내부에서 사용 불가)
        -   이러한 정적 구조 덕분에 코드를 실행하기 전에 모듈 간의 의존성을 분석하고 최적화하기 용이합니다. (CommonJS는 `require()`가 코드 어디에서나 호출될 수 있어 동적입니다.)

-   **학습 목표:**
    -   ES 모듈 시스템의 `import` 및 `export` 문법(named, default)을 이해하고 사용합니다.
    -   Node.js 환경에서 ES 모듈을 사용하는 방법과 설정을 익힙니다.
    -   CommonJS 모듈 시스템과의 주요 차이점(동기/비동기 로딩, `this` 바인딩, 정적/동적 구조 등)을 이해합니다.
        -   **로딩 방식:** CommonJS는 동기적 로딩, ES 모듈은 비동기적 로딩을 지향합니다 (Node.js에서는 내부적으로 동기적으로 처리될 수 있지만, 스펙상 비동기를 염두에 둡니다).
        -   **`this` 값:** CommonJS 모듈의 최상위 스코프에서 `this`는 `module.exports`를 가리키지만, ES 모듈의 최상위 스코프에서 `this`는 `undefined`입니다.
    -   프로젝트의 필요에 따라 CommonJS와 ES 모듈 중 적절한 것을 선택하거나 함께 사용하는 방법을 고려할 수 있습니다.
    -   간단한 예제 코드를 통해 `.mjs` 파일을 사용하거나 `package.json` 설정을 변경하여 ES 모듈을 직접 작성하고 실행해봅니다.