const Employee = require('./Employee')
//included Employee class so that we can use it's methods

// here the Manager class is extending from the Employee class 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
            
         super(name, id, email);
    
        this.officeNumber = officeNumber;
    }
    
//this is a duplicate from the EMployee class
//this will override the getRole function from the employee class
    getRole() {
            return "Manager";
    }
}
    
 module.exports = Manager;
 // export Engineer object so that it and it's methods can be used throughout program