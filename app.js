const express=require('express');
const dotenv=require('dotenv');
const connection=require('./database/database.js');
const router=require('./routes/route.js');
const ejs=require('ejs');
const path=require('path');

connection.connect(e=>{
    if(e)
    {
        console.log("database not connected!");
        return;
    }
    console.log("Database connected!");
})

const app=express();

app.use(express.static(path.join(__dirname,'static')));

app.use(express.json());


app.set('view-engine',ejs);

app.use(express.urlencoded({extended:true}));
app.use('/',router);




app.listen(process.env.PORT || 3002,()=>console.log('Server Created!'));

