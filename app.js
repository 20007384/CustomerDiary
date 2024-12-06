const express=require('express');
const dotenv=require('dotenv');
const connection=require('./database/database.js');
const router=require('./routes/route.js');
const ejs=require('ejs');
const path=require('path');
dotenv.config({path:'./.env'});
const app=express();

connection.connect(e=>{
    if(e)
    {
        console.log("database not connected!");
        return;
    }
    console.log(path.join(__dirname,'static'))
    console.log("Database connected!");
})

app.set('view-engine',ejs);

app.use('/static', express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true}));

app.use(express.json({}));



app.use('/',router);



app.listen(process.env.PORT || 3002,()=>console.log('Server Created!'));

