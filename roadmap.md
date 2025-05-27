# Node.js 학습 로드맵 (백엔드 개발자용)

## JavaScript 핵심 개념 (가장 중요!)

### 기본 문법 복습 및 심화
- naming convention
- var, let, const 차이 (호이스팅, 스코프)
- 데이터 타입 (원시 타입, 객체 타입)
- 연산자, 조건문, 반복문
- 함수 (함수 선언식, 함수 표현식, 화살표 함수)
- 콜백 함수 (Callback Functions): 비동기 프로그래밍의 기본.
- 스코프와 클로저 (Scope & Closure): JavaScript의 강력한 특징.
- this 바인딩: JavaScript의 this는 자바나 파이썬과는 다르게 동작하므로 반드시 이해.
- 프로토타입 (Prototype): 객체 지향의 핵심 (ES6 class와 연관).

### ES6+ (ECMAScript 2015 이상) 문법 (필수 학습)
- 화살표 함수 (Arrow Functions)
- 템플릿 리터럴 (Template Literals)
- 구조 분해 할당 (Destructuring Assignment)
- 스프레드/레스트 연산자 (Spread/Rest Operator)
- class 문법: 자바 클래스와 유사하게 객체 지향 코드 작성 가능.
- Map, Set 등.
- ES Modules (import/export): JavaScript 표준 모듈 시스템.

## Node.js 핵심 개념 및 비동기 프로그래밍 심화

### Node.js 런타임 이해
- 이벤트 루프 (Event Loop): Node.js의 가장 중요한 개념이자 철학. 단일 스레드 비동기 I/O 처리 방식 이해.
- V8 엔진, Libuv 역할.

### 모듈 시스템 (Module System)
- require/module.exports (CommonJS): Node.js의 전통적인 모듈 시스템.
- import/export (ES Modules): 최신 JavaScript 표준 모듈 시스템.

### 내장 모듈 (Built-in Modules)
- fs (파일 시스템): 파일 읽기/쓰기 등.
- http (HTTP 서버/클라이언트): 기본적인 웹 서버 구축.
- path (경로 처리): 파일 경로 조작.
- events (이벤트 에미터): 커스텀 이벤트 생성 및 활용.

### 비동기 프로그래밍 심화
- Promise: 콜백 헬을 벗어나기 위한 핵심 개념.
- async/await: Promise를 기반으로 비동기 코드를 동기 코드처럼 작성. 현대 Node.js 개발의 필수 요소.

## 웹 프레임워크 학습 (Express.js)

### Express.js
*Node.js의 사실상 표준 웹 프레임워크.*

- 라우팅 (Routing): URL에 따른 요청 처리.
- 미들웨어 (Middleware): 요청-응답 주기 중간에 특정 작업 수행 (인증, 로깅, 에러 처리 등).
- HTTP 요청/응답 객체 다루기.
- RESTful API 설계 개념: 백엔드 개발자라면 필수.

## 프론트엔드 프레임워크 학습 (선택 사항)

*백엔드 개발자에게 필수는 아니지만, 풀스택 역량 강화나 프론트엔드와의 원활한 협업을 위해 학습해두면 유용합니다.*

### React.js
- **컴포넌트 기반 아키텍처 (Component-based Architecture):** UI를 재사용 가능한 독립적인 부분으로 나누어 개발하는 방식 이해.
- **JSX:** JavaScript XML, UI를 JavaScript 코드 내에서 직관적으로 작성하는 문법.
- **상태 (State) 와 생명주기 (Lifecycle):** 컴포넌트 내부 데이터 관리 및 변화에 따른 동작 방식 이해.
- **Props:** 컴포넌트 간 데이터 전달 방식.
- **Hooks:** 함수형 컴포넌트에서 상태 및 생명주기 기능을 사용할 수 있게 하는 기능 (e.g., `useState`, `useEffect`).
- **라우팅 (Routing) (e.g., React Router):** 클라이언트 사이드 페이지 전환 및 URL 관리.
- **API 연동:** 백엔드 API와 데이터를 주고받는 방법 (e.g., `fetch` API, Axios).
- **상태 관리 라이브러리 (선택적 심화):** 전역 상태 관리를 위한 도구 (e.g., Redux, Zustand, Recoil) - 필요시 학습.
- **빌드 도구 및 생태계:** Webpack, Babel, Vite 등 프론트엔드 개발 환경 및 빌드 프로세스에 대한 기본적인 이해.
