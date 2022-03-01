// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { generatePage } = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = data => {
    // if (!data.project) {
    //     data.project = [];
    // }
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
    // .then(projectData => {
    //     data.project.push(projectData);
    // });
};

// TODO: Create a function to initialize app
const generatePage = projectArr => {
    return `
    #${title}
    #${description}
    #${installation}
    #${usage}
    #${contribution}
    #${tests}
    #${github}
    #${email}
    #${contact}
    `;
};

// TODO: Create a function to write README file
const writeToFile = (generatePage) => {
    fs.writeFile('./write/README.md', generatePage, err => {
        if (err) throw new Error(err);
        console.log('File created!');
    });
};

// Function call to initialize app
questions()
    .then(data => {
        return generatePage(data);
    })
    .then(generatePage => {
        return writeToFile(generatePage);
    })