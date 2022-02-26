// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = answers => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide some usage information.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who were the contributors to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions for the project.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address for users to contact regarding the project.',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is the best way for users to reach me with additional questions?',
        }
    ])
    .then(projectData => {
        answers.push(projectData);
          return answers;
    });
};

// TODO: Create a function to write README file
function writeToFile(projectData) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./write', projectData, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
// function init() {};

// Function call to initialize app
questions()
    .then(generateMarkdown)