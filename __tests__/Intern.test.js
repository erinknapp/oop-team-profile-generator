const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('this creates object for Intern', () => {
    const intern = new Intern('eknapp', 1234, 'erin.knapp@gmail.com', 'UCF');

    expect(intern.school).toEqual(expect.any(String)); 
    console.log(intern.school);
});

test('this gets intern school', () => {
    const intern = new Intern('eknapp', 1234, 'erin.knapp@gmail.com', 'UCF');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    console.log(intern.getSchool());
});

test('gets intern role', () => {
    const intern = new Intern('eknapp', 1234, 'erin.knapp@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
    console.log(intern.getRole());
});