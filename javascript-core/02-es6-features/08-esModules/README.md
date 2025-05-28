# ES Modules (import/export) 예제 실행 방법

ES Modules는 JavaScript의 표준 모듈 시스템입니다. Node.js에서 ES Modules를 사용하려면 몇 가지 방법이 있습니다.

## 1. `package.json`에 `type: "module"` 추가

프로젝트 루트 디렉토리에 `package.json` 파일을 만들고 다음 내용을 추가합니다:
```json
{
  "type": "module"
}
```
이후 `importer.js` 파일을 Node.js로 직접 실행할 수 있습니다.
```bash
node importer.js
```

## 2. 파일 확장자를 `.mjs`로 사용

`exporter.js`를 `exporter.mjs`로, `importer.js`를 `importer.mjs`로 변경한 후 실행합니다.
```bash
node importer.mjs
```

이 예제에서는 `package.json` 방식을 권장합니다. `javascript-core` 디렉토리 또는 그 상위 디렉토리에 `package.json`을 설정하고 실행해보세요.