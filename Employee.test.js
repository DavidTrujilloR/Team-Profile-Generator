const Employee = require('./Employee');
const employee = new Employee('David', '318132990', 'davidtrujilloruiz@gmail.com');

test('test constructor values', () => {
    expect(employee.name).toBe('David');
    expect(employee.id).toBe('318132990');
    expect(employee.email).toBe('davidtrujilloruiz20@gmail.com');
});

test('test to get the name from getName', () => {
    expect(employee.getName()).toBe('David');
});

test('test to get the name from getId', () => {
    expect(employee.getId()).toBe('318132990');
});

test('test to get the name from getEmail', () => {
    expect(employee.getEmail()).toBe('davidtrujilloruiz20@gmail.com');
});

test('test to get the name from getRole', () => {
    expect(employee.getRole()).toBe('Employee');
});