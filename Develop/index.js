// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require("fs");

//prompt questions from inquirer including a list type
// TODO: Create an array of questions for user input
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
    choices: ["Boost Software License 1.0",
      "MIT license",
      "Apache License",
      "The Unlicense",
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


// TODO: Create a function to write README file
function writeToFile(response) {
  readme = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>README Generator - ${response.projectName}</title>
</head>

<body style="margin: 30px; font-family:Georgia, 'Times New Roman', Times, serif">
  <h1 style="border-bottom: 1px gainsboro solid;"># ${response.projectName} </h1>
  <h2 style="border-bottom: 1px gainsboro solid;">## Project Description</h2>
  <p>${response.description}</p>
  <h2 style="border-bottom: 1px gainsboro solid;">## Table of Contents</h2>
  <h2 style="border-bottom: 1px gainsboro solid;">## Installation</h2>
  <p>${response.installation}</p>
  <h2 style="border-bottom: 1px gainsboro solid;">## Usage</h2>
  <p>${response.usage}</p>
  <h2 style="border-bottom: 1px gainsboro solid;">## License</h2>
  <p>${response.license}</p>
  <h2 style="border-bottom: 1px gainsboro solid;">## Contributing</h2>
  <p>${response.contribution}</p>
  <h2 style="border-bottom: 1px gainsboro solid;">## Tests</h2>
  <p>${response.test}</p>
  <h2 style="border-bottom: 1px gainsboro solid;">## Questions</h2>
  <p>For more questions or comments on the project, please reach out to the following below.</p>
  <p>Github Portfolio: <a href="${response.github}">${response.github}</a></p>
  <p>Email: ${response.email}</p>
</body>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
  integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
  integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
<script src="./Develop/index.js"></script>

</html>`
  fs.writeFile('index.html', readme, (err) =>
    err ? console.error(err) : console.log('Done!')
  )
}
// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
