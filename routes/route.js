const express=require('express');
const router=express.Router();



router.get('/',(req,res)=>res.render('index.js'));


router.post('/add', customerController.save);

router.get('/delete/:id', customerController.delete);

router.get('/update/:id', customerController.edit);

router.post('/update/:id', customerController.update);