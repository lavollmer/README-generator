// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
var markdown = ``;

inquirer.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'projectname'
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'What is your installation instructions?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What is your usage information?',
    name: 'linkedin'
  },
  {
    type: 'input',
    message: 'What is your contribution guidelines?',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'What is your test instructions?',
    name: 'test'
  },
  {
    type: 'input',
    message: 'What is your license?',
    name: 'license'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: `What is your Github username?`,
    name: 'github'
  }
])
  .then((response) =>
    createPage(response)
  )

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
