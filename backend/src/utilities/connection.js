const {Schema} = require('mongoose');
const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
// Mongoose.set('useCreateIndex',true);
const url = "mongodb://localhost:27017/departmentView";

const employeeSchema = Schema({
    empId:{type:String,required:true,unique:true},
    empName:{type:String,required:true},
    empDept:{type:String,required:true},
    empEmail:{type:String,required:true,unique:true},
    empAdd:{type:String,required:true}
},{collection:"Employee"})

const departmentSchema = Schema({
    deptId:{type:String,required:true,unique:true},
    deptName:{type:String,required:true,unique:true},
    deptRoles:{type:String,required:true},
},{collection:"Department"})


let collection = {};

collection.getEmployeeSchema = async()=>{
    try{
        let empDbConnection = await Mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
        let model = await empDbConnection.model('Employee',employeeSchema);
        return model;
    }catch(err){
        // let empError = new Error("Cannot create Employee DataBase.");
        // empError.status = 500;
        throw err;
    }
} 

collection.getDepartmentSchema = async() =>{
    try{
        let depConnection = await Mongoose.connect(url,{useUnifiedTopology:true,UseNewUrlParser:true});
        let model = await depConnection.model('Department',departmentSchema);
        return model;
    }catch(err){
        // let err = new Error("Cannot create Department DataBase");
        // err.status = 500;
        throw err;
    }
}

module.exports = collection;