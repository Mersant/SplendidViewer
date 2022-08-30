const Intern = require('../src/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should initalize with name, id, and email from super()", () => {
            const obj = new Intern('Bill', 123343, 'bill@bill.com');
            expect(obj.name).toEqual('Bill');
            expect(obj.id).toEqual(123343);
            expect(obj.email).toEqual('bill@bill.com');
        });
        it("should initialize with a school name", () => {
            const school = 'OSU'
            const obj = new Intern('Tommy', 123456, 'thomas@thommmmas.com', school);
            expect(obj.school).toEqual(school);
        });
    });
    describe("getSchool()", () => {
        it("should return the intern's school", () => {
            const school = "Arizona State University"
            const obj = new Intern('Tommy', 123456, 'thomas@thommmmas.com', school);
            expect(obj.getSchool()).toEqual(school);
        })
    });
    describe("getRole()", () => {
        it("should return 'Intern'", () => {
            const obj = new Intern('Tommy', 123456, 'thomas@thommmmas.com', 'OSU');
            expect(obj.getRole()).toEqual('Intern');
        })
    });
});