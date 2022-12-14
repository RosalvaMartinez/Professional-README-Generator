// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'projectTitle',
        message: 'What is your project name?',
        default: ''
    },
    {
        name: 'descriptionWhat',
        message: 'Provide a short description explaining: what was your motivation?',
        default: ''
    },
    {
        name: 'descriptionWhy',
        message: 'Provide a short description explaining: why did you build this project?',
        default: ''
    },
    {
        name: 'descriptionSolution',
        message: 'Provide a short description explaining: what problem does your project solve?',
        default: ''
    },
    {
        name: 'descriptionLearn',
        message: 'Provide a short description explaining: what did you learn?',
        default: ''
    },
    {
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        default: ''
    },
    {
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        default: ''
    },
    {
        name: 'screenshot',
        message: 'Provide screenshot(s)',
        default: ''
    },
    {
        name: 'creditCollaborators',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        default: ''
    },
    {
        name: 'creditThirdPartyAssets',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence.',
        default: ''
    },
    {
        name: 'creditTutorials',
        message: 'If you followed tutorials, include links to those here as well.',
        default: ''
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)',
        choices: [ "Apache", new inquirer.Separator(), "Boost", new inquirer.Separator(), "Eclipse", new inquirer.Separator(), "MIT", new inquirer.Separator(), "Zlib", new inquirer.Separator(), "WTFPL", new inquirer.Separator(), "The Unlicense", new inquirer.Separator(), "none", new inquirer.Separator()],

        default: ''
    },
    {
        name: 'features',
        message: 'If your project has a lot of features, list them here',
        default: ''
    },
    {
        name: 'howToContribute',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you prefer',
        default: ''
    },
    {
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        default: ''
    },
    {
        name: 'githubUsername',
        message: 'What is your github username?',
        default: ''
    },
    {
        name: 'githubProfileLink',
        message: 'What is your github profile link?',
        default: ''
    },
    {
        name: 'email',
        message: 'What is your email?',
        default: ''
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var markDown = generateMarkdown(data);
    //console.log(markDown);

    fs.writeFile("output/" + fileName, markDown, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    
}


// TODO: Create a function to initialize app
function init() {
    const prompt = inquirer.createPromptModule();

    prompt(questions)
        .then(results => {
            //console.log(results);
            writeToFile('README.md', results)
        });
}

// Function call to initialize app
init();
