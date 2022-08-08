const Intern = require('./Intern');
const intern = new Intern('Johana', '354869560', 'johanaruiz@gmail.com', 'Unam');

test('test constructor values', () => {
    expect(intern.name).toBe('Johana');
    expect(intern.id).toBe('354869560');
    expect(intern.email).toBe('johanaruiz@gmail.com');
    expect(intern.school).toBe('Unam');
});

test('test to get the name from getName', () => {
    expect(intern.getName()).toBe('Johana');
});

test('test to get the name from getId', () => {
    expect(intern.getId()).toBe('354869560');
});

test('test to get the name from getEmail', () => {
    expect(intern.getEmail()).toBe('johanaruiz@gmail.com');
});

test('test to get the school from getSchool', () => {
    expect(intern.getSchool()).toBe('Unam');
});

test('test to get the name from getRole', () => {
    expect(intern.getRole()).toBe('Intern');
});