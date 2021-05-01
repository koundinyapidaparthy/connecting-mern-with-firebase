const express = require('express');
const secure= require('dotenv');
secure.config({path: "./config.env"});
const app=express();
const port=process.env.PORT;


// ? DataBase

require("./db/conn");
app.use(express.json());


// ? Schema

const MF=require("./models/Schema");
app.get("/",(req,res)=>{
    res.send("hello");
})
app.post("/sigin",async (req,res)=>{
    try{
        if(req.body==undefined){
            res.send("hello world")
        }
        else{
            const {name,email,photo}=req.body;
            const Schema=new MF({
                name,email,photo
            });
            const result =await Schema.save();
            console.log(result);
        }
    }
    catch(e){
        console.log(e);
    }
})

app.listen(port,()=>{console.log(`app listing on ${port}`)});