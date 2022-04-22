// class object for Employee

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //class functions/methods to correlate to inquirer answers

    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

// export Employee object so that it and it's methods can be used throughout program
module.exports = Employee;