# ORM / ODM 사용법

-   **ORM (Object-Relational Mapper)**
    -   **설명:** 객체 지향 프로그래밍 언어의 객체(Object)와 관계형 데이터베이스(Relational Database) 간의 데이터를 자동으로 매핑(mapping)해주는 도구입니다. 개발자는 SQL 쿼리를 직접 작성하는 대신, 익숙한 객체와 메서드를 사용하여 데이터베이스 작업을 수행할 수 있습니다.
    -   **장점:** 생산성 향상, 특정 데이터베이스에 대한 종속성 감소, 유지보수 용이성 증가.
    -   **예시 (Node.js):** Sequelize (PostgreSQL, MySQL, SQLite, MSSQL 등 지원), TypeORM, Knex.js (쿼리 빌더지만 ORM 기능도 일부 제공).
    -   **학습 목표 (Sequelize 예시):** Sequelize를 사용하여 모델(테이블 정의)을 만들고, 모델 간의 관계(1:1, 1:N, N:M)를 설정하는 방법을 익힙니다. CRUD 작업을 Sequelize 메서드를 통해 수행하고, 트랜잭션 관리, 마이그레이션 등의 고급 기능을 학습합니다.

-   **ODM (Object-Document Mapper)**
    -   **설명:** 객체(Object)와 문서 기반 NoSQL 데이터베이스(주로 MongoDB)의 문서(Document) 간의 데이터를 매핑해주는 도구입니다. ORM과 유사한 역할을 하지만, 대상 데이터베이스가 문서형이라는 차이가 있습니다.
    -   **장점:** 스키마 정의 및 유효성 검사, 편리한 데이터 조작 메서드 제공.
    -   **예시 (Node.js):** Mongoose (MongoDB 전용).
    -   **학습 목표 (Mongoose 예시):** Mongoose를 사용하여 스키마(문서 구조 정의)와 모델을 만들고, 데이터 유효성 검사, CRUD 작업, 쿼리 작성, 인덱싱, populate(참조된 문서 가져오기) 등의 기능을 학습합니다.