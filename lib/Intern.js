const Employee = require('./Employee');
//included Employee class so that we can use it's methods

// you must create the new class while extending the Employee class to be able to use the methods

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
//this is a duplicate from the EMployee class
//this will override the getRole function from the employee class
    getRole() {
        return "Intern";
    }
};

module.exports = Intern

// export Employee object so that it and it's methods can be used throughout program