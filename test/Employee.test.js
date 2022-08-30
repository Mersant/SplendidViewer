const Employee = require('../src/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should set 'name' when created", () => {
            const name = 'Arthur'
            const obj = new Employee(name);
            expect(obj.name).toEqual(name);
        });
        it("should set 'id' when created", () => {
            const id = 123456;
            const obj = new Employee('Ronald', id);
            expect(obj.id).toEqual(id);
        });
        it("should set 'email' when created", () => {
            const email = 'harrypotter@business.com';
            const obj = new Employee('Ronald', 123456, email);
            expect(obj.email).toEqual(email);
        });
    });
    describe('getName()', () => {
        it("should return the employee's name", () => {
            const name = 'Billius Weasley';
            const obj = new Employee(name);
            expect(obj.getName()).toEqual(name);
        })
    });
    describe('getId()', () => {
        it("should return the employee's ID", () => {
            const id = 912360;
            const obj = new Employee('Hagrid', id);
            expect(obj.getId()).toEqual(id);
        })
    });
    describe('getEmail()', () => {
        it("should return the employee's email", () => {
            const email = 'anakinskywalker@evil.com';
            const obj = new Employee('Hagrid', 462789, email);
            expect(obj.getEmail()).toEqual(email);
        })
    });
    describe('getRole()', () => {
        it("should return the employee's role", () => {
            const obj = new Employee('Hagrid', 189263, 'tommywiseau@academyawards.com');
            expect(obj.getRole()).toEqual('Employee');
        })
    });
});