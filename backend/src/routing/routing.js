const express = require('express');
const router = express.Router();
const service = require('../service/user')

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

module.exports = router;