const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const cors = require('cors');
// router.post("/",(req,res,next)=>{
//     const  { body: { title, content, id }} = req;
//     console.log(req.body.title);
//     res.send({title:req.body.title,content:content,id:3});
// });
router.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    methods:["GET","POST"],
}));


router.get("/",(req,res)=>{
    if(req.session.user)
    {
        res.send({loggedIn:true,user:req.session.user});
    }
    else{
        res.send({loggedIn:false});
    }
})

router.post("/",(req,res,next)=>{
    const  { body: { user_id,user_pw }} = req;
    //res.send({title:title,content:content,id:id});
    
    let mysql = require("mysql");
    let connection = mysql.createConnection({
        host :"localhost",
        user :"root",
        password : "woowon940706!",
        database : "mydb"
    })
    connection.query("SELECT * FROM User WHERE user_id='" + user_id + "'"
        ,(error,results,fields)=>{        
        if(error)
        {
            console.log(error);
        }
        if(results.length > 0){

            for(var packet of results)
            {            
                let same = bcrypt.compareSync(user_pw,packet.user_pw);
                if(same){
                    const id = packet.user_id;
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn: 300,
                    })
                    req.session.user=packet;
                    res.json({
                        auth: true,
                        token: token,
                        result:{
                            count : 1, 
                            user_id: packet.user_id,
                            user_pw: packet.user_pw,
                            wdate: packet.wdate,
                            name: packet.name,
                            email: packet.email,
                            sex: packet.sex,
                            code: packet.code,
                            birth: packet.birth,
                            role: packet.role,
                        }
                    });
                }
                else{
                    res.json({auth:false,message:"Wrong username and password",count: 0});
                }
            }
        }
        else{
            res.json({auth:false,message:"No User Exists",count: -1});
        }

    })
     connection.end();
});

module.exports = router;