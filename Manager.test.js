const Manager = require('./Manager');
const manager = new Manager('Nadeny', '318295850', 'nadenyrivera@gmail.com', '321');

test('test constructor values', () => {
    expect(manager.name).toBe('Nadeny');
    expect(manager.id).toBe('318295850');
    expect(manager.email).toBe('nadenyrivera@gmail.com');
    expect(manager.officeNumber).toBe('321');
});

test('test to get the name from getName', () => {
    expect(manager.getName()).toBe('Nadeny');
});

test('test to get the name from getId', () => {
    expect(manager.getId()).toBe('318295850');
});

test('test to get the name from getEmail', () => {
    expect(manager.getEmail()).toBe('nadenyrivera@gmail.com');
});

test('test to get the office number from getOfficeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('321');
});

test('test to get the name from getRole', () => {
    expect(manager.getRole()).toBe('Manager');
});