const Employee = require('./Employee');
//included Employee class so that we can use it's methods

// you must create the new class while extending the Employee class to be able to use the methods
class Engineer extends Employee{
    constructor(name = '', id, email, github){
        super (name, id, email, github);
        this.github = github;
    }

 
    getGithub(){
        return this.github;
    }
    //this is a duplicate from the Employee class
    //this will override the getRole function from the employee class
    getRole() {
        return "Engineer";
    }
}

// export Engineer object so that it and it's methods can be used throughout program
module.exports = Engineer;