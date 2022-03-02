const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = project => {
    if (project.license == 'MIT') {
        return `
        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        `;
    }
    else if (project.license == 'ISC') {
        return `
        [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        `;
    }
    else if (project.license == 'GNU') {
        return `
        [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        `;
    }
    else if (project.license == 'Apache') {
        return `
        [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `;
    }
    else if (project.license == 'BSD') {
        return `
        [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
        `;
    }
    else if (project.license == 'None') {
        return ``;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// const renderLicenseLink = License => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection = License => {}

module.exports = { renderLicenseBadge }
