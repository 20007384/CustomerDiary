const express=require('express');
const dotenv=require('dotenv');
const mysql=require('mysql2');


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(process.env.PORT || 3002,()=>console.log('Server Created!'));

