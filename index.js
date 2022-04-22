const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//create array for team
const teamArray = [];

// CLI inquirer prompts for manager card
// Logic for inquirer prompts
const userPrompts = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter the manager's name: ",
            // was going to call this name but that caused problems
            // forces user to fill out this value in the CLI form
            validate: managerName => {
                if (managerName) {
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
            name: 'managerID',
            message: "Enter the manager's ID",
            validate: managerID => {
                if(managerID) {
                    return false;
                } else {
                    console.log ("Must enter manager's ID");
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the manager's email address: ",
            validate: managerEmail => {
                if(managerEmail){
                    return true;
                } else {
                    console.log("Must enter a valid email address")
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Enter manager's office number: ",
            valid: managerOfficeNumber => {
                if(managerOfficeNumber) {
                    return false;
                } else {
                    console.log("Pleae enter a valid office number")
                    return true;
                }
            }
        }
    ]).then (managerInfo => {
        let manager = new Manager
        (managerInfo.managerName, 
        managerInfo.managerID, 
        managerInfo.managerEmail, 
        managerInfo.managerOfficeNumber);
    })
}

// team prompts
const teamPrompts = () =>{
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'options',
            message: 'Select type of employee to add to team: ',
            choices: ['Add Engineer', 'Add Intern', 'Team Finished']
        }
    ]).then(selectedOption => {
        if(selectedOption.option[0] === "Add Engineer"){
            addEngineer();
        } else if(selectedOption.options[0] === "Add Intern"){
            addIntern();
        } else {
            let htmlPage = generateHTML(teamArray);
            let passFile = fs.writeFile(generateHTML);
            return fs.copyFile(passFile);
        }
    })
}

// add engineer prompts
function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engName',
            message: "Enter the Engineer employee's name",
            validate: engName => {
                if (engName) {
                    return true;
                } else {
                    console.log("You must enter Engineer employee's name");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'engID',
            message: "Enter the employee's ID: ",
            validate: engID => {
                if (engID) {
                    return false;
                } else {
                    console.log("Must enter employee's ID")
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "Enter employee's email address",
            validate: engEmail => {
                if (engEmail) {
                    return true;
                } else {
                    console.log('Must enter their email address')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engGithub',
            message: "Enter the employee's GitHub username: ",
            validate: engGithub => {
                if (engGithub) {
                    return true;
                } else {
                    console.log("Must enter employee's GitHub username")
                }
            }
        }
    ]).then((engAnswers) => {
        let engineer = new Engineer(
            engineerAnswers.engName,
            engineerAnswers.engID,
            engineerAnswers.engEmail,
            engineerAnswers.engGithub);
            teamArray.push(engineer);

            teamPrompts();

        });
    }
function addIntern(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'intName',
            message: "Please enter Intern's name. (Required)",
            validate: intName => {
                if(intName){
                    return true
                }else{
                    console.log("You must enter the Intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intID',
            message: "Enter the intern's name",
            validate: intID => {
                if (intID) {
                    return true;
                } else {
                    console.log("You must enter the intern's name");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'intEmail',
            message: "Enter intern's email address",
            validate: intEmail => {
                if (intEmail) {
                    return true;
                } else {
                    console.log('Must enter their email address')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "Enter the Intern's school name: ",
            validate: intSchool => {
                if (intSchool) {
                    return true;
                } else {
                    console.log("Must enter Intern's school name")
                    return false;
                }
            }
        }
    ]).then((intAnswers) => {
        let intern = new Intern(
            intAnswers.intName,
            intAnswers.intID,
            intAnswers.intEmail,
            intAnswers.intSchool);
        teamArray.push(intern);

        teamPrompts();

    });
}
userPrompts();
