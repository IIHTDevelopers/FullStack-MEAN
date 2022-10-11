var express = require('express');
var router = express.Router();

// var employeesService = require("../services/employee");
var employeeController = require("../controllers/employee.controller");


// Get all employees 
router.get('/', employeeController.findAll);

// Get single employee by id 
router.get('/:id', employeeController.findById);

// Save employee 
router.post('/', employeeController.save);

// update employee 
router.put('/:id', employeeController.update);

// update employee
router.delete('/:id', employeeController.delete);

module.exports = router;