const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateSite = require('./generate-site');   
const fs = require('fs');
const path = require('path');
const Employee = require('./Employee');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.htlm');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your ID',
            validate: employeeId => {
                if(employeeId) {
                    return true
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'officeNumber',
            message:'Enter your office number',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select which option you would like to continue with: ',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'add an engineer':
                    promptEngineer();
                    break;
                    case 'add an intern':
                    promptIntern();
                    break;
                    default:
                        buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    Add a New Engineer
    `);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name of engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name of engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your ID',
            validate: employeeId => {
                if(employeeId) {
                    return true
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'githubUsername',
            message:'Enter your GitHub username',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    Add a New Intern
    `);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name of Intern?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name of Intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your ID',
            validate: employeeId => {
                if(employeeId) {
                    return true
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'school',
            message:'Enter your school name',
            validate: school => {
                if(school) {
                    return true;
                } else {
                    console.log('Please enter your school name');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    Finish building my team
    `);

    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), 'utf-8');
}

promptManager();