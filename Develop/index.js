// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//to export generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=>writeToFile('GENERATEDREADME.md',generateMarkdown(data)))
}

// Function call to initialize app
init();
