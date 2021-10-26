// const { connect } = require('mongoose');
const connection = require('../utilities/connection');

const generateId = async()=>{
    let empData = await connection.getEmployeeSchema();
    let eids = await empData.distinct('empId');
    let maxEid = Math.max(...eids);
    return maxEid;
}

let model = {}

model.getAllEmployees = async()=>{
    let empModel = await connection.getEmployeeSchema();
    let empData = await empModel.find({},{_id:0});
    if(empData.length > 0){
        // console.log(empData);
        return empData
    }else{
        return null;
    }
}

model.getAllDepartments = async()=>{
    let model = await connection.getDepartmentSchema();
    let deptData = await model.find({},{_id:0})
    if(deptData.length > 0){
        // console.log(deptData);
        return deptData
    }else{
        return null;
    }
}

model.didRegister = async(usrObj)=>{
    let usrSchema =await connection.getUserSchema();
    let findUsr = await usrSchema.findOne({usrEmail:usrObj.usrEmail})
    if(findUsr){
        let err = new Error("User already exists");
        err.status = 400;
        throw err;
    }
    let didReg =await usrSchema.insertMany(usrObj)
    if(didReg){
        console.log(didReg);
        return didReg;
    }else{
        return null;
    }
}

model.loginHandle = async(loginData)=>{
    let userSchema = await connection.getUserSchema();
    let emailFound = await userSchema.findOne({usrEmail:loginData.usrEmail});
    if(emailFound){
        return emailFound
    }else{
        let err = new Error("Register before login");
        err.status  = 400;
        throw err;
    }
}

module.exports = model;