const Engineer = require('./Engineer');
const engineer = new Engineer('Max', '384695780', 'maxestrada@gmail.com', 'MaxEstradaD');

test('test constructor values', () => {
    expect(engineer.name).toBe('Max');
    expect(engineer.id).toBe('384695780');
    expect(engineer.email).toBe('maxestrada@gmail.com');
    expect(engineer.githubUsername).toBe('MaxEstradaD');
});

test('test to get the name from getName', () => {
    expect(engineer.getName()).toBe('Max');
});

test('test to get the name from getId', () => {
    expect(engineer.getId()).toBe('384695780');
});

test('test to get the name from getEmail', () => {
    expect(engineer.getEmail()).toBe('maxestrada@gmail.com');
});

test('test to get the github username from getGithub', () => {
    expect(engineer.getGithub()).toBe('MaxEstradaD');
});

test('test to get the name from getRole', () => {
    expect(engineer.getRole()).toBe('Engineer');
});