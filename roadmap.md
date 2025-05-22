# Node.js 학습 로드맵 (백엔드 개발자용)

## JavaScript 핵심 개념 (가장 중요!)

### 기본 문법 복습 및 심화
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
