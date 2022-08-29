const Intern = require('../lib/Intern');
const intern = new Intern('Ricky', '18', 'Ricky@gmail.com', 'UCF');

test('test for intern info', () => {
    expect(intern.name).toBe('Ricky');
    expect(intern.id).toBe('18');
    expect(intern.email).toBe('Ricky@gmail.com')
});

test('test if we can get name from getName()', () => {
    expect(intern.getName()).toBe('Ricky');
});

test('test if we can get ID from getId()', () => {
    expect(intern.getId()).toBe('18');
});

test('test if we can get email from getEmail()', () => {
    expect(intern.getEmail()).toBe('Ricky@gmail.com');
});

test('test if we can get role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test if we get a school from getSchool()', () => {
    expect(intern.getSchool()).toBe('UCF');
});