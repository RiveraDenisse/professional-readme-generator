// If there is no license, return an empty string but if there is a license then create a badge based on license
function renderLicenseBadge (License) {
  if (!License){
    return '';
  }

  return '![License](https://img.shields.io/badge/License-'+ License + '-orange.svg)';
}

// If user chooses no license, then the table of contents will not show license section
const renderTableofContents = License => {
  let notLicense = `## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)`;
  if (!License){
    return notLicense;
  }
  return `
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  `;
};

// If there is no license, return an empty string
const renderLicenseSection = License => {
  if (!License){
    return '';
  }
  return `
  ## License

  ${License}
`;
}

//this is the template for the README file
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
  ## Description

  ${data.Description}

 ${renderTableofContents(data.License)}
  
  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## Credits

  ${data.Credits}

  ${renderLicenseSection(data.License)}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Testing}

  ## Questions

  For any questions, please contact me using the information below:

  * Github Profile: [${data.username}](https://github.com/${data.username})
  * Email me at : [${data.email}](emailto:${data.email})
`
};
//to make available inside index.js
module.exports = generateMarkdown;
