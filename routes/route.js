const express=require('express');
const router=express.Router();
const {list}=require('../controller/controller.js');


router.get('/',list);


// router.post('/add', customerController.list);

// router.get('/delete/:id', customerController.delete);

// router.get('/update/:id', customerController.edit);

// router.post('/update/:id', customerController.update);

module.exports=router;