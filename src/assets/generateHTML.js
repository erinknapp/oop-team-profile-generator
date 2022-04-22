// js file to help html page render depending on inquirer answers


//Manager information logic
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-3 mb-3">
        <div class = "card h-125">
            <div class = "cardHeader">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class = cardBody>
                <p class="id"> ID: ${manager.id}</p>
                <p class ="email">Email: <a href="mailto:${manager.email}>${manager.email}</a>
                </p>
                <p class = "office">Office Phone Number: ${manager.officeNumber}</p>
            /div>
        </div>
    </div>
    `;
}

// Engineer Card logic
const generateEngineer = function (engineer) {
    return `
    <div class= "col-4 mt-3 mb-3">
        <div class = "card h-125">
            <div class = "cardHeader">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class = "cardBody">
                <p class = "id"> ID: ${engineer.id}</p>
                <p class = "email">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></p>
                <p class = "github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

//Intern card and logic

const generateIntern = function (intern) {
    return `
    <div class= "col-4 mt-3 mb-3">
        <div class = "card h-125">
            <div class = "card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body" >
                <p class= "id">ID: ${intern.id}</p>
                <p class = "email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class = "school">School Name: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

generateHTML = (data) => {
    cardArray = [];
    //create array for all the cards that are generated

    for(let i=0; i < data.length; i++) {
        //some local vars
        const employee = data[1];
        const role = employee.getRole();

        if(role === 'Manager') {
            const managerCard = generateManager(employee);
            cardArray.push(managerCard)
        }


        if(role === 'Engineer'){
            const engineerCard = generateEngineer(employee);
            cardArray.push(engineerCard);
        }

        if(role === 'Intern'){
            const internCard = generateIntern(employee);
            cardArray.push(internCard);
        }
    }

    //pull all cards together
    const employeeCards = cardArray.join('')

    //setting up employee cards to be used by other functions
    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam;
}

const generateTeamPage = function (employeeCards){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Team's Profile</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            <header>
            <h1 class="title">Team Profile</h1>
            </header>
            <div class = "container">
                <div class = "row justify-content-around" id="teamCards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `;
}

//makeing this file available to the index page
module.exports = generatedHTML;