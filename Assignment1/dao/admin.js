const Admin = require("../models/admin");

async function createAdmin({  name,age,email,password,mobile,gdo,role,skills ,}) {
  console.log("============================");
  console.log(name,age,email,password,mobile,gdo,skills );
  console.log("============================");  
  
  return Admin.create({
    name,age,email,password,mobile,gdo,skills
    });
}
async function getAllAdmin(){
  return Admin.findAll();
}

module.exports = { createAdmin ,getAllAdmin};
