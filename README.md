# hoodie-project

### 후드를 뒤집어 쓰고 주변에 대해 신경 쓰지 말자!

Hoodie에서 나에 의한, 나만을 위한 글을 작성해보자
글을 쓰고 공유할 수도, 나만의 글로 간직할 수도 있어요.

### feature
- 자신만의 이야기가 담긴 글을 쓸 수 있다
- 원하는 썸네일로 지정하여 나만의 공간으로 꾸밀수 있다
- 공개, 비공개 글로 설정 가능


### Hello Guys!!

### 반드시 config/config.json
    계정설정하기
    password만 설정하기
    DB명은 hoodie로 고정

### Sequelize로 DB 생성하기
    cd server
    -> 서버 폴더로 이동 후 
    npx sequelize db:create

### 모델 생성하기
    cd server
    -> 서버 폴더로 이동 후
    그대로 복사해서  터미널 붙여넣기


    npx sequelize model:generate --name user --attributes user_id:string,user_pw:string,wdate:date,name:string,email:string,sex:string,birth:string,role:integer

    npx sequelize model:generate --name notice --attributes wdate:date,content:string,title:string

    npx sequelize model:generate --name comment --attributes comment:string,wdate:date

    생성 시작

     npx sequelize db:migrate

    이제 관계 설정 

### Commit 규칙
1. 클라이언트, 서버인지 작성
2. 타입에 맞는 단어로 작성
- fix - 잘못된 기능을 수정 및 보안
- add - 추가
- remove - 삭제
- move - 코드의 이동
- rename - 이름변경이 있을때 사용
3. 세부정보작성

`ex) [client] fix:add login page`

### PR 규칙
`number(00):[client] fix:add login page`

### PR 본문 
`PR 타입(하나 이상의 PR 타입을 선택해주세요)
 기능 추가
 기능 삭제
 버그 수정
 의존성, 환경 변수, 빌드 관련 코드 업데이트

반영 브랜치
ex) feat/login -> dev

변경 사항
ex) 로그인 시, 구글 소셜 로그인 기능을 추가했습니다.

테스트 결과
ex) 베이스 브랜치에 포함되기 위한 코드는 모두 정상적으로 동작해야 합니다. 결과물에 대한 스크린샷, GIF, 혹은 라이브 데모가 가능하도록 샘플API를 첨부할 수도 있습니다.`
