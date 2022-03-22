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

    