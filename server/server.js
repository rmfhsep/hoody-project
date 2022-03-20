const express = require('express');
const cors = require('cors');
const model = require('./models/index.js');
const app = express();
const PORT = 5000;


const bodyParser = require('body-parser');

app.use(express.json());


app.use(cors({
    origin : 'http://localhost:3000',
    methods : ["POST","GET"],
    credentials : true,
}));

app.get('/',(req,res)=>{
    res.send('Hello Express');
})
// DB 연결은 비동기 
model.sequelize.sync() 
.then(()=>{
    console.log('DB연결 성공');
})
.catch((err)=>{
    console.log('DB 연결 실패');
    console.log(err);
})


app.listen(PORT,()=>{
    console.log(`서버에 접속했습니다. 포트는 ${PORT}`);
})