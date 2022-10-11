const EmployeeModel = require('../dao/models/employee.model');

var employeeService = {
    findAll: async (cb) => {
        let empList = await EmployeeModel.find({})
            .exec(cb);
    },

    findById: async (id, cb) => {
        await EmployeeModel.findById(id)
            .exec(cb);
    },

    save: async (employee, cb) => {
        var employeeModel = new EmployeeModel(employee);
        // let savedEmployee = await employeeModel.save()
        // .catch((err) => { 
        //     cb(err);
        // });
        // cb(null, savedEmployee);

        try {
            let savedEmployee = await employeeModel.save()
            cb(null, savedEmployee);
        } catch (err) {
            cb(err);
        }

    },

    update: (id, employee, cb) => {
        EmployeeModel.findByIdAndUpdate(id, { $set: employee }).exec(cb)
    },

    delete: function (id, cb) {
        EmployeeModel.findByIdAndDelete(id).exec(cb)
    }
};

module.exports = employeeService; 