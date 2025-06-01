# require/module.exports (CommonJS)

-   **설명:** Node.js의 전통적인 내장 모듈 시스템입니다.
    -   `require()`: 다른 모듈을 불러오는 함수입니다. 동기적으로 작동하며, 모듈의 `module.exports` 객체를 반환합니다.
    -   `module.exports`: 모듈에서 외부로 내보내고 싶은 변수, 함수, 객체 등을 할당하는 객체입니다. `require()` 호출 시 이 객체가 반환됩니다.
    -   `exports`: `module.exports`를 가리키는 편의 변수입니다. `exports`에 직접 속성을 추가하는 것은 `module.exports`에 속성을 추가하는 것과 동일하지만, `exports` 자체에 새로운 객체를 할당하면 `module.exports`와의 참조가 끊어져 모듈이 제대로 내보내지지 않을 수 있습니다.
-   **학습 목표:**
    -   CommonJS 모듈 시스템의 기본 사용법(`require`, `module.exports`, `exports`)을 이해합니다.
    -   모듈이 캐싱되는 방식과 `require`의 동작 원리를 이해합니다.
    -   `module.exports`와 `exports`의 차이점을 명확히 구분하고 올바르게 사용합니다.
    -   자신만의 모듈을 만들고 다른 파일에서 불러와 사용하는 방법을 익힙니다.