const Employee = require('../lib/Employee');

test('create object for employee', () => {
    const employee = new Employee('erin', 1234, 'erin.knapp@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Employee('erin', 1234, 'erin.knapp@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    console.log(employee.getName());
});


test('gets employee id', () => {
    const employee = new Employee('erin', 1234, 'erin.knapp@gmail.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});


test('gets employee email', () =>{
    const employee = new Employee('erin', 1234, 'erin.knapp@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});


test('gets employee role', () => {
    const employee = new Employee('erin', 1234, 'erin.knapp@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});