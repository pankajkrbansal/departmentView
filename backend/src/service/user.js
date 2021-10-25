const model = require('../model/model');

let user = {}

user.getAllEmployees = async()=>{
    let empData = await model.getAllEmployees();
    if(empData){
        return empData
    }else{
        let err = new Error("No Employees found")
        err.status = 400;
        throw err;
    }
}

user.getAllDepartments = async()=>{
    let deptData = await model.getAllDepartments();
    if(deptData){
        // console.log(deptData);
        return deptData
    }else{
        let err = new Error("No Departments found")
        err.status = 400;
        throw err;
    }
}

user.didRegister = async(userData)=>{
    let usrRegister = await model.didRegister(userData);
    if(usrRegister){
        return usrRegister
    }else{
        let err = new Error("Failed to register user");
        err.status = 500;
        throw err;
    }
}

module.exports = user;