const inquirer = require('inquirer');

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
        CLC.GREEN("Login succesful!");
        mainMenu();
    }
    );

function mainMenu() {
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
            return
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
        CLC.GREEN(`Succesfully added Intern "${response.name}"`)
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
        CLC.GREEN(`Succesfully added Engineer "${response.name}"`)
        mainMenu();
    })
}

function removeEmployee() {
    CLC.CLS();
    CLC.RED('**DANGER ZONE -- You are about to remove an employee from the roster**');
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


/*
{
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add an Intern',
        'Add an Engineer',
        'Add a Manager',
        'View employee roster'
      ],
      name: 'userChoice',
    },*/