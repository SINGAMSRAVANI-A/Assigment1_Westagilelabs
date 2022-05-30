const SuperAdmin = require("../models/superadmin");

async function createSuperAdmin({
  name,age,email,password,mobile,gdo,skills }) {
    console.log("============================");
  console.log(name,age,email,password,mobile,skills );
  console.log("============================");  
  
  return SuperAdmin.create({
    name,age,email,password,mobile,gdo,skills
    });
}
async function getAllSuperAdmins(){
  return SuperAdmin.findAll();
}

module.exports = { createSuperAdmin ,getAllSuperAdmins};
