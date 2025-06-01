# SQL 및 NoSQL 기본 개념

-   **SQL (Structured Query Language) 데이터베이스 (관계형 데이터베이스 - RDB)**
    -   **설명:** 정해진 스키마(테이블 구조)에 따라 데이터를 테이블 형태로 저장합니다. 행(Row)과 열(Column)으로 구성되며, 테이블 간의 관계(Relation)를 통해 데이터를 연결하고 관리합니다.
    -   **특징:** 데이터의 일관성(Consistency)과 무결성(Integrity)을 중요하게 여깁니다. ACID(Atomicity, Consistency, Isolation, Durability) 트랜잭션을 지원합니다.
    -   **예시:** PostgreSQL, MySQL, Oracle, SQL Server, SQLite.
    -   **학습 목표:** 관계형 데이터베이스의 기본 구조(테이블, 행, 열, 기본 키, 외래 키)와 SQL 쿼리(SELECT, INSERT, UPDATE, DELETE, JOIN 등)의 기본 개념을 이해합니다.

-   **NoSQL (Not Only SQL) 데이터베이스 (비관계형 데이터베이스)**
    -   **설명:** 관계형 모델과 다른 데이터 저장 방식을 사용합니다. 유연한 스키마를 가지며, 대용량 데이터 처리 및 분산 환경에 적합한 경우가 많습니다.
    -   **종류 및 특징:**
        -   **문서(Document) 데이터베이스:** JSON 또는 BSON과 유사한 문서 형태로 데이터를 저장합니다. (예: MongoDB, CouchDB)
        -   **키-값(Key-Value) 스토어:** 간단한 키와 값의 쌍으로 데이터를 저장합니다. (예: Redis, Amazon DynamoDB)
        -   **컬럼 패밀리(Column-Family) 스토어:** 행과 열 대신 컬럼 패밀리 단위로 데이터를 저장합니다. (예: Apache Cassandra, HBase)
        -   **그래프(Graph) 데이터베이스:** 노드(Node)와 엣지(Edge)를 사용하여 데이터 간의 관계를 표현하고 저장합니다. (예: Neo4j, Amazon Neptune)
    -   **학습 목표:** NoSQL 데이터베이스의 등장 배경과 주요 유형(문서, 키-값 등)의 특징 및 장단점을 이해하고, 각 유형이 어떤 상황에 적합한지 파악합니다. MongoDB와 같은 대표적인 NoSQL 데이터베이스의 기본 개념을 학습합니다.