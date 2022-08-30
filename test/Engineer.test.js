const Engineer = require('../src/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should initalize with name, id, and email from super()", () => {
            const obj = new Engineer('Bill', 123343, 'bill@bill.com', 'Bill');
            expect(obj.name).toEqual('Bill');
            expect(obj.id).toEqual(123343);
            expect(obj.email).toEqual('bill@bill.com');
        });
        it("should initialize with a github username", () => {
            const obj = new Engineer('Tommy', 123456, 'thomas@thommmmas.com', 'Coconut');
            expect(obj.github).toEqual('Coconut');
        });
    });
    describe("getGithub()", () => {
        it("should return the Engineer's github username", () => {
            const obj = new Engineer('Tommy', 123456, 'thomas@thommmmas.com', 'Arnold');
            expect(obj.getGithub()).toEqual('Arnold');
        })
    });
    describe("getRole()", () => {
        it("should return 'Engineer'", () => {
            const obj = new Engineer('Tommy', 123456, 'thomas@thommmmas.com', 'Arnold');
            expect(obj.getRole()).toEqual('Engineer');
        })
    });
});