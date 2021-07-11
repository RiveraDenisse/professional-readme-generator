// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//to export generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input (this will get the required information to populate Markdown function and create README file)
//Some questions will require to validation
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
              } else {
                console.log('You need to enter a project name');
                return false;
              }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide all steps required to install your project[Provide step-by-step description] (Required)',
        validate: InstallationInput => {
          if (InstallationInput) {
            return true;
          } else {
            console.log('You need to enter the steps required to install your project');
            return false;
          }
        }   
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions on how to use your project (Required)',
        validate: UsageInput => {
          if (UsageInput) {
            return true;
          } else {
            console.log('You need to enter instructions on how to use the project(or examples)');
            return false;
          }
        }   
    },
    //here goes the question for licensing (if user chooses no license then it will not ask to choose a license)
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to your project? (this will create a license badge as well)',
    },
    //if user types Y to add instructions then the question below will be prompted
    {
        type: 'list',
        name: 'License',
        message: "Please choose a license to your project from the list below",
        when: (data) => data.confirmLicense === true,
        choices: ['MIT', 'Apache2.0', 'GNUGPLv3', 'MozillaPublicLicense2.0', 'TheUnlicense']
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to add instructions for contributing to your project?',
        //default: "If your would like to contribute please follow the [Contributor Covenant](https://www.contributor-covenant.org/)"
    },
    //if user types Y to add instructions then the question below will be prompted
    {
        type: 'input',
        name: 'Contributing',
        message: "Please add instructions for contributing to your project",
        when: (data) => data.confirmContributing === true,
        validate: ContributingInput => {
          if (ContributingInput) {
            return true;
          } else {
            console.log('Please add instructions on how to collaborate');
            return false;
          }
        }   
    },
    {
        type: 'confirm',
        name: 'confirmTesting',
        message: 'Would you like to add testing instructions/examples?',
    },
    //if user types Y to add instructions then the question below will be prompted
    {
        type: 'input',
        name: 'Testing',
        message: "Please add testing instructions/examples?",
        when: (data) => data.confirmTesting === true,
        validate: TestingInput => {
          if (TestingInput) {
            return true;
          } else {
            console.log('Please add instructions on how to collaborate');
            return false;
          }
        }
    },
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Would you like to list any contributors',
    },
    //if user types Y to add instructions then the question below will be prompted
    {
        type: 'input',
        name: 'Credits',
        message: "Please list the contributors",
        when: (data) => data.confirmCredits === true,
        validate: CreditsInput => {
          if (CreditsInput) {
            return true;
          } else {
            console.log('Please list your contributors');
            return false;
          }
        }
    },
    //Questions section
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your github username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please provide a username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your an email to contact you',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide a email');
                return false;
            }
        }
    }      

];

// TODO: Create a function to write README file
function writeToFile(fileName,data) {
    fs.writeFile(fileName, data, err=>{
        if (err){
            return console.log(err);
        }
        console.log("Your README.md file was generated")
    });
}

// TODO: Create a function to initialize app, prompt will pass the question array, from there the userfeedback will be used to create the README
function init() {
    inquirer.prompt(questions)
    .then((data)=>writeToFile('GENERATEDREADME.md',generateMarkdown(data)))
}

// Function call to initialize app
init();
