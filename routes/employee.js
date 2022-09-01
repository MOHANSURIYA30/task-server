const express = require('express')
const router = express.Router()

const employeeController = require("../controllers/employee");

router.get('/',employeeController.readEmployee);
router.post('/register',employeeController.registerEmployee);
router.post('/login',employeeController.loginEmployee);

module.exports = router

