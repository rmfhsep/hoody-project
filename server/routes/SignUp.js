const express = require("express");
const router = express.Router();
const cors = require('cors');
const model = require("../models/index.js");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const bcrypt = require('bcrypt');
const saltRound = 10;
// router.post("/",(req,res,next)=>{
//     const  { body: { title, content, id }} = req;
//     console.log(req.body.title);
//     res.send({title:req.body.title,content:content,id:3});
// });
router.use((req,res,next) =>{
    console.log(req.body);
    next();
})

router.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    methods:["GET","POST"],
}));

router.post("/",(req,res,next)=>{
    const  { body: { user_id,user_pw,name,email,sex,birth }} = req;
    //res.send({title:title,content:content,id:id});
    const encryptedPassowrd = bcrypt.hashSync(user_pw, 10); // sync
    var dateTime = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();
    //res.send({title:title,content:content,id:id});


    model.User.create({
        user_id : title,
        user_pw : content,
        wdate : dateTime,
        name : name,
        email:email,
        sex:sex,
        birth:birth,
        role:"1",
        createAt : dateTime,
    })
    .then( result => {                                                                                                        
        res.json(result)
    })
    .catch( err => {
        console.log(err)
    })


    connection.query("INSERT INTO User(user_id,user_pw,wdate,name,email,sex,birth,role) VALUES('" +

        user_id + "','" + 
        encryptedPassowrd + "'," + 
        "NOW(),'" + // 
        name + "','" +
        email + "','" +
        sex + "','" +
        birth + "',1)"
        ,(error,results,fields)=>{
        if(error)
        {
            console.log(error);
        }
        res.send({main:results});
    });
     connection.end();
});

module.exports = router;