const express = require("express");
const router = express.Router();
const EmployeeDao = require("../dao/employee");
const AdminDao = require("../dao/admin");
const SuperAdminDao = require("../dao/superadmin");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/employee", async (req, res) => {
  try {
    const stores = await EmployeeDao.getAllEmployees();
    res.json(stores);
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/employee", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newEmployee = await EmployeeDao.createEmployee(req.body);
    res.json({
      message: `Created a new Employee with employee_id ${newEmployee.emp_id}`,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});
router.post("/superadmin", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newSuperAdmin = await SuperAdminDao.createSuperAdmin(req.body);
    res.json({
      message: `Created a new SuperAdmin with sadmin_id ${newSuperAdmin.sadmin_id}`,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});
router.get("/superadmin", async (req, res) => {
  try {
    const Superadmin = await SuperAdminDao.getAllSuperAdmins();
    res.json(Superadmin);
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.get("/admin", async (req, res) => {
  try {
    const stores = await AdminDao.getAllAdmin();
    res.json(stores);
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/admin", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newAdmin = await AdminDao.createAdmin(req.body);
    res.json({
      message: `Created a new Admin with admin_id ${newAdmin.admin_id}`,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

module.exports = router;
