// const { connect } = require('mongoose');
const connection = require('../utilities/connection');

const EmployeeData = [
    {
        empId:"E001",
        empName:"Ramen",
        empDept:"IVTS",
        empEmail:"ramen.ivts@gmail.com",
        pwd:"password01",
        empAdd:"India"
    },
    {
        empId:"E002",
        empName:"Takashi",
        empDept:"IVTC",
        empEmail:"takashi.ivtc@gmail.com",
        pwd:"password01",
        empAdd:"India"

    },
    {
        empId:"E003",
        empName:"Riyoko",
        empDept:"CCD",
        empEmail:"riyoko.ccd@gmail.com",
        pwd:"password01",
        empAdd:"India"

    },
    {
        empId:"E004",
        empName:"Kal",
        empDept:"CMP",
        empEmail:"kal01.cmp@gmail.com",
        pwd:"password01",
        empAdd:"India"

    }
]

const DepartmentDb = [
    {
        deptId:1,
        deptName:"CCD",
        deptRoles:"The CCD department helps the employee with their virtual desktops & cloud enablemet process."
    },
    {
        deptId:2,
        deptName:"CMP",
        deptRoles:"The CMP department helps the employee with their virtual desktops & cloud enablemet process."
    },
    {
        deptId:3,
        deptName:"IVTS",
        deptRoles:"The IVTS department helps the employee with their virtual desktops & cloud enablemet process."
    },
    {
        deptId:4,
        deptName:"IVTC",
        deptRoles:"The IVTS department helps the employee with their virtual desktops & cloud enablemet process."
    }
];


const userData = [
    {
        usrName:"admin",
        usrPwd:"admin",
        usrEmail:"admin@gmail.com"
    }
];



exports.setupDb = async()=>{
    let Emp = await connection.getEmployeeSchema();
    await Emp.deleteMany();
    let empData = await Emp.insertMany(EmployeeData);

    let Dept = await connection.getDepartmentSchema();
    await Dept.deleteMany();
    let deptData = await Dept.insertMany(DepartmentDb);
    
    let usr = await connection.getUserSchema();
    await usr.deleteMany();
    let usrSet = usr.insertMany(userData);


    if(empData && deptData && usrSet)
    {
        return "Insertion successfull"
    }else{
        let err = new Error("DataBase Insertion failed");
        err.status = 400;
        throw err;
    }
}

// module.exports = setupDb;