const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('creates an object for Manager', () => {
    const manager = new Manager('eknapp', 1234, 'erin.knapp@', 2022);

    expect(manager.officeNumber).toEqual(expect.any(Number));
}) ;

test('gets role of employee', () => {
    const manager = new Manager('eknapp', '1234', 'erin.knapp@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
    console.log(manager.getRole());
})