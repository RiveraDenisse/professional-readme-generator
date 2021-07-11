// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//this is the template for the README file
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.License}-orange)
  ## Description

  ${data.Description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## Credits

  ${data.Credits}

  ## License

  ${data.License}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Testing}

  ## Questions

  For any questions, please contact me using the information below:

  * Github Profile: [${data.username}](https://github.com/${data.username})
  * Email me at : [${data.email}](emailto:${data.email}) with questions about this project
`
};
//to make available inside index.js
module.exports = generateMarkdown;
