# events (이벤트 에미터)

-   **설명:** Node.js의 많은 객체는 이벤트를 발생시키며, `EventEmitter` 클래스는 이러한 이벤트 기반 동작의 핵심입니다. `EventEmitter`를 상속받아 커스텀 이벤트를 만들고, 특정 이벤트가 발생했을 때 실행될 리스너 함수를 등록하여 관리할 수 있습니다. Node.js의 비동기 이벤트 중심 아키텍처를 이해하는 데 중요합니다.
-   **학습 목표:**
    -   `EventEmitter` 클래스의 기본 사용법을 익힙니다.
        -   `new EventEmitter()`: 이벤트 에미터 객체 생성.
        -   `on(eventName, listener)` 또는 `addListener(eventName, listener)`: 특정 이벤트에 대한 리스너 함수 등록.
        -   `emit(eventName[, ...args])`: 특정 이벤트를 발생시키고, 등록된 리스너 함수들을 실행.
        -   `once(eventName, listener)`: 이벤트에 대한 리스너를 등록하되, 한 번만 실행된 후 자동으로 제거.
        -   `removeListener(eventName, listener)` 또는 `off(eventName, listener)`: 특정 이벤트의 리스너 제거.
    -   사용자 정의 이벤트를 만들고, 이를 통해 모듈 간의 느슨한 결합을 구현하는 방법을 이해합니다.