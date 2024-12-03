const express=require('express');
const dotenv=require('dotenv');
const mysql=require('mysql2');
const router=require('./routes/route.js');

const connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"password",
    database:"CRUDNODEJSPAULSQL"
});

connection.connect(e=>{
    if(e)
    {
        console.log("database not connected!");
        return;
    }
    console.log("Database connected!");
})

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router);


app.listen(process.env.PORT || 3002,()=>console.log('Server Created!'));

