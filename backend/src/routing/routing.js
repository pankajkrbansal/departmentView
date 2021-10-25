const express = require('express');
const router = express.Router();
const service = require('../service/user')
const User = require('../model/user');


router.get('/departments',async(req,res,next)=>{
    try{
        let data = await service.getAllDepartments();
        res.json(data);
    }catch(err){
        next(err);
    }
})
router.get('/employees',async(req,res,next)=>{
    // let data =
    try{
        let data = await service.getAllEmployees();
        res.json(data);
    }catch(err){
        next(err);
    } 
})

router.post('/register',async(req,res,next)=>{
    try{
        let userDetails = new User(req.body);
        let didRegister = await service.didRegister(userDetails);
        res.json("User Registerd with email id : "+didRegister[0].usrEmail);
    }catch(err){
        next(err);
    }
})

module.exports = router;