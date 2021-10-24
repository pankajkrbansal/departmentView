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

module.exports = model;