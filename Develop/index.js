// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require("fs");

//prompt questions from inquirer including a list type
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'projectName'
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
    name: 'usage'
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
    type: 'list',
    message: 'What is your license?',
    name: 'license',
    choices: ["MIT license",
      "Apache License",
      "The Unlicense",
      "Boost Software License 1.0",
      "GNU General Public License v3.0"]
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
    writeToFile(response)
  )

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(response) {
  readme = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
  <title>README Generator<title>
</head>

<body>
  <h1># ${response.projectName} </h1>
    <h2>## project description</h2>
      <p>${response.description}</p>
    <h2>## Table of Contents</h2>
    <h2>## Installation</h2>
      <p>${response.installation}</p>
    <h2>## Usage</h2>
      <p>${response.usage}</p>
    <h2>## License</h2>
    <h2>## Contributing</h2>
      <p>${response.contribution}</p>
    <h2>## Tests</h2>
    <h2>## Questions</h2>
</body>

</html>`
  fs.writeFile('index.html', readme, (err) =>
    err ? console.error(err) : console.log('Success!')
}
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
