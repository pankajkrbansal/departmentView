const express = require('express');
const router = express.Router();
const service = require('../service/user')

router.get('/departments',(req,res,next)=>{
    try{
        let data = service.getAllDepartments();
        res.json(data);
    }catch(err){
        next(err);
    }
})
router.get('/employees',(req,res,next)=>{
    // let data =
    try{
        let data = service.getAllEmployees();
        res.json(data);
    }catch(err){
        next(err);
    } 
})

module.exports = router;