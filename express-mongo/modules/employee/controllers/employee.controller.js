
var employeesService = require("../services/employee");

const employeeController = {

    // Get all employees 
    findAll: (req, res) => {
        employeesService.findAll((err, empList) => {
            if (err) {
                console.log("Error:", err);
                res.json({ success: false });
            }
            else {
                res.json({ success: true, employees: empList });
            }
        });
    },

    // Get single employee by id 
    findById: (req, res) => {
        employeesService.findById(req.params.id, (err, employee) => {
            if (err) {
                console.log("Error:", err);
                res.json({ success: false });
            }
            else {
                if(!!employee){
                    res.json({success: true, employee});
                } else {
                    res.json({success: false, message: "Employee id not found in db", employee});
                }
            }
        });
    },

    // Save employee 
    save: (req, res) => {
        const savedEmployee = employeesService.save(req.body, (err, data) => {
            if (err) {
                console.log(err);
                res.json({ success: false });
            } else {
                console.log("Successfully created an employee.");
                res.json({ success: true, data });
            }
        });
    },

    // update employee 
    update: (req, res) => {

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
        console.log(employee)
        employeesService.update(req.params.id, employee, (err, updatedEmp) => {
            if (err) {
                console.log(err);
                res.json({ success: false });
            } else {
                // res.json({ success: true, employee: updatedEmp });
                res.json({ success: true, message: !!updatedEmp ? "Employee updated" : "Employee not found in database", employee: updatedEmp });
            }
        });
    },

    // delete employee
    delete: (req, res) => {
        employeesService.delete(req.params.id, (err, deletedEmployee) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Employee deleted!");
                res.json({ success: true, message: !!deletedEmployee ? "Employee deleted" : "Employee not found in database", employee: deletedEmployee });
            }
        });
    }
}
module.exports = employeeController;