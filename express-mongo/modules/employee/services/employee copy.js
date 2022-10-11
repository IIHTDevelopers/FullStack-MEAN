const EmployeeModel = require('../models/employee');

var employeeService = {
    findAll: function (req, res) {
        EmployeeModel.find({}).exec(function (err, employees) {
            if (err) {
                console.log("Error:", err);
                res.json({ success: false });
            }
            else {
                res.json(employees);
            }
        });
    },

    findById: function (req, res) {
        EmployeeModel.findById(req.params.id, function (err, employee) {
            // EmployeeModel.findOne({ _id: req.params.id }).exec(function (err, employee) {
                if (err) {
                console.log("Error:", err);
                res.json({ success: false });
            }
            else {
                res.json(employee);
            }
        });
    },

    save: function (req, res) {
        var employeeModel = new EmployeeModel(req.body);
        employeeModel.save(function (err, data) {
            if (err) {
                console.log(err);
                res.json({ success: false });
            } else {
                console.log("Successfully created an employee.");
                res.json({ success: true, data });
            }
        });
    },

    update: function (req, res) {
        let employee = {}

        if (!!req.body.name) {
            employee.name = req.body.name;
        }
        if (req.body.address) {
            employee.address = req.body.address;
        }
        if (req.body.position) {
            employee.position = req.body.position;
        }
        if (req.body.salary) {
            employee.salary = req.body.salary;
        }
        if (req.body.joining_date) {
            employee.joining_date = req.body.joining_date;
        }

        EmployeeModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: employee
            }, { new: true },
            function (err, employee) {
                if (err) {
                    console.log(err);
                    res.json({ success: false });
                }
                res.json({ success: true });
            });
    },

    delete: function (req, res) {
        EmployeeModel.findByIdAndDelete(req.params.id, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Employee deleted!");
                res.json({ success: true, message: !!data ? "Employee deleted" : "Employee not found in database", data });

                // if(data){
                //     res.json({ success: true, message: "Employee deleted", data });
                // } else {
                //     res.json({ success: true, message: "Employee not found in database" });
                // }
            }
        });
    }
};

module.exports = employeeService; 