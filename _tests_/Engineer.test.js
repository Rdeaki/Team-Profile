const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Ricky', '13', 'Ricky@gmail.com', 'rdeaki');

test('test for engineer info', () => {
    expect(engineer.name).toBe('Ricky');
    expect(engineer.id).toBe('13');
    expect(engineer.email).toBe('Ricky@gmail.com')
    expect(engineer.github)
});

test('test if we can get name from getName()', () => {
    expect(engineer.getName()).toBe('Ricky');
});

test('test if we can get ID from getId()', () => {
    expect(engineer.getId()).toBe('13');
});

test('test if we can get email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('Ricky@gmail.com');
});


test('test for username from getGithub()', () => {
    expect(engineer.getGithub()).toBe('rdeaki');
});

test('test if we can get role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
