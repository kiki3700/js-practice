# path (경로 처리)

-   **설명:** 파일 및 디렉터리 경로를 다루는 유틸리티를 제공하는 Node.js 내장 모듈입니다. 운영체제(Windows, macOS, Linux)에 따라 다른 경로 구분자(예: `\` vs `/`) 문제를 해결하고, 경로를 안전하고 일관되게 조작할 수 있도록 돕습니다.
-   **학습 목표:**
    -   `path.join([...paths])`: 여러 경로 문자열을 운영체제에 맞는 구분자로 합쳐 하나의 경로로 만듭니다.
    -   `path.resolve([...paths])`: 상대 경로를 절대 경로로 변환합니다. 인자들이 없으면 현재 작업 디렉터리의 절대 경로를 반환합니다.
    -   `path.basename(path[, ext])`: 경로의 마지막 부분(파일 또는 디렉터리 이름)을 반환합니다. 선택적으로 확장자를 제거할 수 있습니다.
    -   `path.dirname(path)`: 경로의 디렉터리 이름을 반환합니다.
    -   `path.extname(path)`: 경로의 확장자를 반환합니다.
    -   `path.sep`: 현재 운영체제의 경로 구분자를 제공합니다.