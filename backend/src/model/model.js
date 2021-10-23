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
    let empData = await connection.getEmployeeSchema();
    if(empData.length > 0){
        return empData
    }else{
        return null;
    }
}

model.getAllDepartments = async()=>{
    let deptData = await connection.getDepartmentSchema();
    if(deptData.length > 0){
        return deptData
    }else{
        return null;
    }
}

module.exports = model;