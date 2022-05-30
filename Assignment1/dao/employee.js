const Employee = require("../models/employee");

async function createEmployee({ name,age,email,password,mobile,gdo,role,skills }) {
  console.log("============================");
  console.log(name,age,email,password,mobile,gdo,skills );
  console.log("============================");  
  return Employee.create({
    name,age,email,password,mobile,gdo,role,skills
  });
}
async function getAllEmployees(){
  return Employee.findAll();
}
module.exports = { createEmployee ,getAllEmployees};
