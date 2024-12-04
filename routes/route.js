const express=require('express');
const router=express.Router();
const {list,edit,save,deleteC}=require('../controller/controller.js');


router.get('/',list);

router.get('/update/:id', edit);

router.get('/delete/:id', deleteC);

router.post('/add', save);


module.exports=router;