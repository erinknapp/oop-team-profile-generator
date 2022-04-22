const Engineer = require('../lib/Engineer');

test('this creates object for engineer', () => {
    const engineer = new Engineer('erin', 1234, 'erin.knapp@gmail.com', 'eknapp');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github user name for engineer', () => {
    const engineer = new Engineer('erin', 1234, 'erin.knapp@gmail.com', 'eknapp');

    expect(engineer.getGit()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role for engineer', () => {
    const engineer = new Engineer('erin', 1234, 'erin.knapp@gmail.com', 'eknapp');

    expect(engineer.getRole()).toEqual('Engineer');
});