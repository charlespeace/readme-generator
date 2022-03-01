const fs = require('fs');
// const { generateMarkdown } = require('./index');

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// const generatePage = projectArr => {
//     return `
//     # ${data.title}

//     # Table of Contents
//     -[Description](#Description)
//     -[Installation](#Installation)
//     -[Usage](#Usage)
//     -[Contribution](#Contribution)
//     -[Tests](#Tests)
//     -[Questions](#Questions)

//     ## Description
//     -${data.description}

//     ## Installation
//     -${data.installation}

//     ## Usage
//     -${data.usage}

//     ## Contribution
//     -${data.contribution}

//     ## Tests
//     -${data.test}

//     ## Questions
//     -${data.gihub}
//     -${data.email}
//     -${data.contact}
// `;
// };

module.exports = templateData => {
    const { project } = templateData; 
    return `
    ${generatePage(project)}
    `;
};
