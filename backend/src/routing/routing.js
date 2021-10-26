const express = require('express');
const router = express.Router();
const service = require('../service/user')
const User = require('../model/user');
const loginUser = require('../model/login');

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

router.post('/login',async(req,res,next)=>{
    try{
        let data = new loginUser(req.body);
        let loginResponse = await service.loginHandle(data);
        res.json("successfuly logged in with email id"+loginResponse.usrEmail)
    }catch(error){
        next(error);
    }
})

module.exports = router;