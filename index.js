// TODO: Include packages needed for this application
const createRead = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description'   
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can other uses contribute to your project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter a test code.',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please select a license if applicable.',
        choices: ['MIT', 'Mozilla Public', 'Apache', 'Boost Software', 'No License'],
        name: 'license' 
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, createRead(data), (err) =>
    err ? console.error(err) : console.log('Inputs Successfully Recorded!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)  
        .then((data) =>{
            writeToFile('README.md', data)
        })
}

// Function call to initialize app
init();
