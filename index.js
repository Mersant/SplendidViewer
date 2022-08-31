const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./src/Manager');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');

const commandLineController = require('./lib/CLControl.js')
const CLC = new commandLineController;

// Array that all employees will be added to
var employeeRoster = [];

CLC.CLS();
CLC.YELLOW('Please input manager information:')

inquirer
    .prompt([
    {
        type: 'input',
        message: 'Please input the team manager\'s name',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Please input the team manager\'s employee ID',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'Please input the team manager\'s email address',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Please input the team manager\'s office number',
        name: 'managerOfficeNumber',
    },
    ])
    .then((response) => {
        employeeRoster.push(new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber));
        CLC.CLS();
        CLC.BGGREEN();
        CLC.WHITE("Login succesful!")
        mainMenu();
    }
    );

function mainMenu() {
    CLC.GREEN();
    console.log("---- Roster Preview ----");
    CLC.RST();
    employeeRoster.map(a => {
        // Color code employees by role
        switch (a.getRole()) {
            case 'Manager':
                CLC.YELLOW();
                break;
            case 'Engineer':
                CLC.BLUE();
                break;
            case 'Intern':
                CLC.WHITE();
                break;
            default:
                CLC.RED();
                break;
        }
        process.stdout.write(`Role: ${a.getRole()}\t Name: ${a.name}\n`)
    });
    CLC.GREEN("------------------------")
inquirer
    .prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: [
        'Add an Intern',
        'Add an Engineer',
        'Remove an Employee',
        'Finish and view employee roster'
        ],
        name: 'userChoice',
    }
    ]).then((response) => {
        if(response.userChoice === 'Add an Intern') {
            addIntern();
        }
        else if(response.userChoice === 'Add an Engineer') {
            addEngineer();
        }
        else if(response.userChoice === 'Remove an Employee') {
            removeEmployee();
        }
        else {
            // First, generate the HTML code
            var html =
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Roster</title>
                <link rel="stylesheet" href="./reset.css">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" rel='stylesheet' type='text/css'>
                <link rel="stylesheet" href="./style.css">
            </head>
            <body>
                <header>My Team</header>`;
            for(i=0; i<employeeRoster.length; i++) {
                var iconAddr;
                var additionalInfo;
                if(employeeRoster[i].getRole() == 'Manager') {
                    iconAddr = '../icons/glasses.png';
                    additionalInfo = `<li>Office Number: ${employeeRoster[i].officeNumber}</li>`;
                } else if(employeeRoster[i].getRole() == 'Engineer') {
                    iconAddr = '../icons/pcb.png';
                    additionalInfo = `<li>GitHub Username: <a href="https://github.com/${employeeRoster[i].getGithub()}" target="_blank" rel="noopener noreferrer">${employeeRoster[i].getGithub()}</a></li>`;
                } else {
                    iconAddr = '../icons/scholar.png';
                    additionalInfo = `<li>School Name: ${employeeRoster[i].getSchool()}</li>`;
                }
                html +=
                `<div class="employeeCard">
                <div class="employeeCardTitle">
                <img src="${iconAddr}">
                <h1>${employeeRoster[i].getName()}</h1>
                <h2>${employeeRoster[i].getRole()}</h2>
                </div>
                <ul>
                    <li>ID: ${employeeRoster[i].getId()}</li>
                    <li>Email: <a href="mailto:${employeeRoster[i].getEmail()}">${employeeRoster[i].getEmail()}</a></li>
                    ${additionalInfo}
                </ul>
            </div>`
            }
            html += 
                `</body>
                </html>`;

            if (fs.existsSync(`${__dirname}\\dist\\index.html`)) {
                CLC.RED();
                try {
                    fs.unlinkSync(`${__dirname}\\dist\\index.html`)
                    console.log('Deleted old HTML file')
                } catch(err) {
                    console.error(err);
                }
            }
            fs.appendFile(`${__dirname}\\dist\\index.html`, 
            html,
            function (err) {
                if (err) throw err;
                CLC.GREEN();
                console.log(`Saved! Path is ${__dirname}\\dist\\index.html`);
                require('child_process').exec(`start "" "${__dirname}\\dist"`);
                CLC.RST();
            })
        }
    })
}

function addIntern() {
    CLC.CLS();
    CLC.YELLOW('Please input intern\'s information')
inquirer
    .prompt([
    {
        type: 'input',
        message: 'Please input the intern\'s name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please input the intern\'s employee ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please input the intern\'s email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please input the intern\'s school',
        name: 'school',
    },
    ]).then((response) => {
        employeeRoster.push(new Intern(response.name, response.id, response.email, response.school));
        CLC.CLS();
        CLC.BGGREEN()
        CLC.WHITE(`Succesfully added Intern "${response.name}"`);
        mainMenu();
    })
}
function addEngineer() {
    CLC.CLS();
    CLC.YELLOW('Please input engineer\'s information')
inquirer
    .prompt([
    {
        type: 'input',
        message: 'Please input the engineer\'s name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please input the engineer\'s employee ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please input the engineer\'s email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please input the engineer\'s GitHub username',
        name: 'github',
    },
    ]).then((response) => {
        employeeRoster.push(new Engineer(response.name, response.id, response.email, response.github));
        CLC.CLS();
        CLC.BGGREEN();
        CLC.WHITE(`Succesfully added Engineer "${response.name}"`);
        mainMenu();
    })
}

function removeEmployee() {
    CLC.CLS();
    CLC.BOLD();
    CLC.RED('**DANGER ZONE -- You are about to remove an employee from the roster**');
    CLC.RST();
    
    var tempList = employeeRoster.slice(1).map(a => a.name);
    tempList.push("Quit");
inquirer
    .prompt([
    {
        type: 'list',
        message: 'Which employee do you want to remove?',
        choices: tempList,
        name: 'choice',
    },

    ]).then((response) => {
        CLC.CLS();
        if(response.choice != 'Quit') {
            var index = tempList.indexOf(response.choice);
            // Add 1 since tempList is shifted by 1 since the Manager was removed
            employeeRoster.splice(index+1,1);
            CLC.BGRED(`Removed employee "${response.choice}" from the roster`);
        } else {
            CLC.BGGREEN("Cancelled remove employee action");
        }
        mainMenu();
    })
}
