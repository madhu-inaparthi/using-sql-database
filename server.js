const express = require('express');
const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected to database');
    }
})

app.get('/',(req,res)=>{
    res.send('this is home page');
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})