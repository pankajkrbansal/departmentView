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
        return deptData
    }else{
        let err = new Error("No Departments found")
        err.status = 400;
        throw err;
    }
}


module.exports = user;