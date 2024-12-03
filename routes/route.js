const express=require('express');
const router=express.Router();
const {list,edit}=require('../controller/controller.js');


router.get('/',list);

router.get('/update/:id', edit);



module.exports=router;