const fs = require('fs');
const inquirer = require('inquirer');

// function to include the generated HTML file
const generateHTML = require('./src/generateHTML');
// Includes different profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { type } = require('os');

//create array for team
const teamArray = [];

// CLI inquirer prompts for manager card
// Logic for inquirer prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name: "
            // was going to call this name but that caused problems
            // forces user to fill out this value in the CLI form
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Manager's name is a required field");
                    return false;
                }
            }
        },
        //manager ID input with validation to ensure the value is digits and no letters
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log ("Must enter manager's ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address: ",
            validate: emailInput => {
                // use regex to validate email
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
                    return true;
                } else {
                    console.log("Must enter a valid email address")
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number: ",
            valid: numberInput => {
                if(isNaN(numberInput)) {
                    console.log("Pleae enter a valid office number")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        //array method to push the new input data right on to the teamArray
        teamArray.push(manager);
        console.log(manager);
    })
};

// CLI inquirer prompts for engineer and intern (employees) card
// Logic for inquirer prompts

const addEmployee = () => {
    console.log(`
    ++++++++++++++++++++++
    Add Employees to Team
    ++++++++++++++++++++++
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter  employee's name");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID: ",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Must enter employee's ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email address",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                //regex tp test email address
                if (valid) {
                    return true;
                } else {
                    console.log('Must enter their email address')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's GitHub username: ",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Must enter employee's GitHub username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's school name: ",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Must enter Intern's school name")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members? ',
            default: false
        }
    ])
    //logic for separating employee types into Engineer or Intern
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmpoyee } = employeeData;
        let employee;

        if(role === "Engineer"){
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }else if (role === "Intern"){
            employee = new Intern(name, id, email, school);
            console.log(employee)
        }
        // each type of employee is pushed on to over all teamArray
        teamArray.push(employee);
        if (confirmAddedEmployee) {
            return addEmployee(teamArray);
        }else {
            return teamArray;
        }
    })
};

// Generating HTML so users can visualize the team profile in a GUI
// This logic uses the fs package

const writeFile = data => {
    fs.writeFile('/dist/index.html', data, err =>{
        if(err){
            console.log(err);
            return;
            //error handler, if there is an error then console.log the error to help with troubleshooting
        }else {
            console.log("Team has been successfully created!");
        }
    })
};

// same concept as above but instead adding Manager info to HTML
addManager()
    .then(addEmployee)
    .them(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err)
    });