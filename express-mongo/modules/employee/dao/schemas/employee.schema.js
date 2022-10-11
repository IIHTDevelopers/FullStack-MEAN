var mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    address: String,
    department: String,
    salary: Number,
    joining_date: { type: Date, default: Date.now }
});

module.exports = EmployeeSchema;