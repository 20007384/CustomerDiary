const express=require('express');
const router=express.Router();
const {list,edit,save}=require('../controller/controller.js');


router.get('/',list);

router.get('/update/:id', edit);

router.post('/add', save);


module.exports=router;