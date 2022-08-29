const Employee = require('../lib/Employee');
const employee = new Employee('Ricky', '10', 'Ricky@gmail.com');

test('test for employee info', () => {
    expect(employee.name).toBe('Ricky');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('Ricky@gmail.com')
});

test('test if we can get name from getName()', () => {
    expect(employee.getName()).toBe('Ricky');
});

test('test if we can get ID from getId()', () => {
    expect(employee.getId()).toBe('10');
});

test('test if we can get email from getEmail()', () => {
    expect(employee.getEmail()).toBe('Ricky@gmail.com');
});

test('test if we can get role from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});