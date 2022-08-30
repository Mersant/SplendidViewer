const Manager = require('../src/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should initalize with name, id, and email from super()", () => {
            const obj = new Manager('Bill', 123343, 'bill@bill.com');
            expect(obj.name).toEqual('Bill');
            expect(obj.id).toEqual(123343);
            expect(obj.email).toEqual('bill@bill.com');
        });
        it("should initialize with an office number", () => {
            const officeNumber = 43
            const obj = new Manager('Tommy', 123456, 'thomas@thommmmas.com', officeNumber);
            expect(obj.officeNumber).toEqual(officeNumber);
        });
    });
    describe("getRole()", () => {
        it("should return 'Manager'", () => {
            const obj = new Manager('Tommy', 123456, 'thomas@thommmmas.com', '5B');
            expect(obj.getRole()).toEqual('Manager');
        })
    });
});