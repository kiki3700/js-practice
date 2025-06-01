# Node.js에서 데이터베이스 연결 및 쿼리 실행

-   **설명:** Node.js 애플리케이션에서 데이터베이스와 상호작용하기 위해서는 해당 데이터베이스를 지원하는 드라이버(driver) 또는 라이브러리를 사용해야 합니다. 이 드라이버를 통해 데이터베이스 연결을 설정하고, SQL 쿼리(RDB의 경우) 또는 데이터베이스별 명령(NoSQL의 경우)을 실행하여 CRUD(Create, Read, Update, Delete) 작업을 수행합니다.
-   **학습 목표:**
    -   선택한 데이터베이스(예: PostgreSQL, MySQL, MongoDB)에 맞는 Node.js 드라이버를 설치하고 사용하는 방법을 익힙니다. (예: `pg` for PostgreSQL, `mysql2` for MySQL, `mongodb` for MongoDB)
    -   데이터베이스 연결 설정을 구성하고(호스트, 포트, 사용자명, 비밀번호, 데이터베이스명 등), 연결 풀(Connection Pool)의 개념과 필요성을 이해합니다.
    -   드라이버를 사용하여 데이터베이스에 연결하고, 기본적인 CRUD 작업을 수행하는 코드를 작성해봅니다.
    -   비동기 방식으로 데이터베이스 작업을 처리하고, 콜백 또는 Promise/async-await를 사용하여 결과를 다루는 방법을 익힙니다.
    -   SQL Injection과 같은 보안 위협을 방지하기 위해 Prepared Statements 또는 파라미터화된 쿼리를 사용하는 방법을 학습합니다.