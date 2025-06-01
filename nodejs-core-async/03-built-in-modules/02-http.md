# http (HTTP 서버/클라이언트)

-   **설명:** HTTP 프로토콜을 사용하여 웹 서버를 구축하거나 HTTP 요청을 보낼 수 있는 기능을 제공하는 Node.js 내장 모듈입니다. Express.js와 같은 웹 프레임워크의 기반이 됩니다.
    -   `http.createServer()`: HTTP 서버 객체를 생성합니다. 요청(request) 이벤트 리스너를 등록하여 클라이언트 요청을 처리하고 응답(response)을 보냅니다.
    -   `http.request()` / `http.get()`: 다른 서버로 HTTP 요청을 보내는 클라이언트 기능을 제공합니다.
-   **학습 목표:**
    -   `http` 모듈을 사용하여 간단한 HTTP 서버를 만들고, 요청 URL 및 메서드에 따라 다른 응답을 보내는 방법을 이해합니다.
    -   요청(IncomingMessage) 객체와 응답(ServerResponse) 객체의 주요 속성 및 메서드를 다루는 방법을 익힙니다. (예: `req.url`, `req.method`, `res.writeHead`, `res.end`)
    -   `http` 모듈을 사용하여 외부 API에 GET 요청을 보내고 응답 데이터를 처리하는 방법을 학습합니다.