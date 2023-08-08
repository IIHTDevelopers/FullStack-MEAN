const mockingoose = require('mockingoose');
const EmployeeModel = require('../modules/employee/dao/models/employee.model');
const employeeService = require('../modules/employee/services/employee');

let boundaryTestName = `EmployeeServcie boundary test`
let functionalTestName = `EmployeeServcie functional test`

describe('EmployeeServcie', () => {
    describe('exception', () => {
        it(`${boundaryTestName} should find employee by id`, (done) => {
            const employee = {
                _id: '62f8dfad306e17471c7f7ee7',
                name: 'Tom',
                address: 'tokyo, japan',
                salary: 10000
            };

            mockingoose(EmployeeModel).toReturn(employee, 'findOne');// findById is findOne in mokingoose

            employeeService.findById(employee._id, (err, data) => {
                expect(!!err).toBe(false);
                expect(!!data).toBe(true);
                expect(data.name).toBe(employee.name);
                expect(data.address).toBe(employee.address);
                expect(data.salary).toBe(employee.salary);
                let today = new Date();
                expect(new Date(data.joining_date).getDate()).toBe(today.getDate());
                expect(new Date(data.joining_date).getMonth()).toBe(today.getMonth());
                expect(new Date(data.joining_date).getFullYear()).toBe(today.getFullYear());
                done();
            });
        });

        it(`${functionalTestName} should not find unsaved employee`, (done) => {

            const employee = null;

            mockingoose(EmployeeModel).toReturn(employee, 'findOne');// findById is findOne in mokingoose

            employeeService.findById("62f7ff5d5e6af8151e15ae29", (err, data) => {
                expect(!!err).toBe(false);
                expect(data).toBeNull();
                done();
            });
        });
    });
});
