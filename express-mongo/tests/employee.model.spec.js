const mockingoose = require('mockingoose');
const EmployeeModel = require('../modules/employee/dao/models/employee.model');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let boundaryTestName = `EmployeeModel boundary test`

describe('EmployeeModel', () => {
    it(`${boundaryTestName} should get all employees`, async () => {
        const emps = [{
            _id: '62f8dfad306e17471c7f7ee7',
            name: 'carl',
            address: 'japan',
            salary: 10000
        }];

        mockingoose(EmployeeModel).toReturn(emps);
        let result = await EmployeeModel.find();
        // console.log("all emps")
        // console.log(result[0]._id);
        // console.log(new ObjectId(emps[0]._id));

        expect(result[0]._id).toEqual(new ObjectId(emps[0]._id));
        expect(result[0].name).toBe(emps[0].name);
        expect(result[0].address).toBe(emps[0].address);
        expect(result[0].salary).toBe(emps[0].salary);
        let today = new Date();
        expect(new Date(result[0].joining_date).getDate()).toBe(today.getDate());
        expect(new Date(result[0].joining_date).getMonth()).toBe(today.getMonth());
        expect(new Date(result[0].joining_date).getFullYear()).toBe(today.getFullYear());
    });

    it(`${boundaryTestName} should find the employee with given name`, async () => {
        const emps = [{
            _id: '62f8dfad306e17471c7f7ee7',
            name: 'carl',
            address: 'japan',
            salary: 10000
        }];

        mockingoose(EmployeeModel).toReturn(emps);
        let employees = await EmployeeModel.find().where({ name: "carl" });

        employees.forEach(emp => {
            expect(emp.name).toBe("carl");
        })
    });

});
