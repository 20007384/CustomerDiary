const express=require('express');
const router=express.Router();
const {list,edit,save,deleteC,search,update}=require('../controller/controller.js');


router.get('/',list);

router.put('/updateuser/:id', update);

router.get('/update/:id', edit);


// router.delete('/delete/:id', deleteC);

router.get('/delete/:id', deleteC);

router.post('/add', save);

router.get('/search/:id', search);


module.exports=router;