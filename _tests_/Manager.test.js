const Manager = require('../lib/Manager');
const manager = new Manager('Ricky', '5', 'Ricky@gmail.com', '555-555-5555');

test('test for manager info', () => {
    expect(manager.name).toBe('Ricky');
    expect(manager.id).toBe('5');
    expect(manager.email).toBe('Ricky@gmail.com')
});

test('test if we can get name from getName()', () => {
    expect(manager.getName()).toBe('Ricky');
});

test('test if we can get ID from getId()', () => {
    expect(manager.getId()).toBe('5');
});

test('test if we can get email from getEmail()', () => {
    expect(manager.getEmail()).toBe('Ricky@gmail.com');
});

test('test if we can get role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('test if we get cell number from getNumber()', () => {
    expect(manager.getNumber()).toBe('555-555-5555');
});