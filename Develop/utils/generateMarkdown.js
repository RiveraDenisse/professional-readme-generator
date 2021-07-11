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

// If there is no license it will return an empty string, if user selects a license then license section will populate with the license information and link
function renderLicenseSection(License) {
  let MIT = `## License
  This application is covered by MIT License. For more information about the license please click [here](https://choosealicense.com/licenses/mit/)`;
  let Apache = `## License
  This application is covered by Apache License 2.0. For more information about the license please click [here](https://choosealicense.com/licenses/apache-2.0/)`;
  let GNU = `## License
  This application is covered by GNU General Public License v3.0. For more information about the license please click [here](https://choosealicense.com/licenses/gpl-3.0/)`;
  let Mozilla = `## License
  This application is covered by Mozilla Public License 2.0. For more information about the license please click [here](https://choosealicense.com/licenses/mpl-2.0/)`;
  let Unlicense = `## License
  This application is covered by The Unlicense. For more information about the license please click [here](https://choosealicense.com/licenses/unlicense/)`;
  if (License ==='MIT') {
    return MIT;
  }
  else if (License === 'Apache2.0') {
    return Apache;
  }
  else if (License === 'GNUGPLv3') {
    return GNU;
  }
  else if (License === 'MozillaPublicLicense2.0') {
    return Mozilla;
  }
  else if (License === 'TheUnlicense') {
    return Unlicense;
  }
  else {
    return '';
  }
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
  * Email me at : ${data.email}
`
};
//to make available inside index.js
module.exports = generateMarkdown;
