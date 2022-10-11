var mongoose = require('mongoose');
var EmployeeSchema = require('../schemas/employee.schema');

// var EmployeeSchema = new mongoose.Schema({
//     name: String,
//     address: String,
//     department: String,
//     salary: Number,
//     joining_date: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Employee', EmployeeSchema); 
module.exports = mongoose.model('Employee', EmployeeSchema); 

