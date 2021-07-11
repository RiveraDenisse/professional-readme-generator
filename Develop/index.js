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
