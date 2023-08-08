const calculator = require("../utils/calculator");

let testName = `Calculator boundary test`

describe("Calculator", () => {
    describe("boundary", () => {
        test(`${testName} adds 1 & 2 to equal 3`, () => {
            expect(calculator.sum(1, 2)).toBe(3);
        });
        test(`${testName} multiplies 1 & 2 to equal 2`, () => {
            expect(calculator.mul(1, 2)).toBe(2);
        });
        test(`${testName} devides 2 by 1 to equal 1`, () => {
            expect(calculator.div(2, 1)).toBe(2);
        });
        test(`${testName} subtracts 1 from 2 to equal 1`, () => {
            expect(calculator.sub(2, 1)).toBe(1);
        });
    });
});
