// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseSection } = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = data => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('You need to enter a project title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide some usage information.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license will the application be covered under?',
            choices: ['MIT','ISC','GNU', 'None'],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who were the contributors to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions for the project.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address for users to contact regarding the project.'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is the best way for users to reach me with additional questions?'
        }
    ])
};

// TODO: Create a function to initialize app
const generatePage = project => {
    return `
# ${project.title}
${renderLicenseBadge(project)}

## Table of Contents
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contribution](#Contribution)

[Tests](#Tests)

[Questions](#Questions)


## Description
* ${project.description}


## Installation
* ${project.installation}


## Usage
* ${project.usage}

## Contribution
* ${project.contribution}


## Tests
* ${project.tests}


## Questions
* Github: ${project.github}

* Email: ${project.email}

* ${project.contact}


## License
${renderLicenseSection(project)}
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