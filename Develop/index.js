// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require("fs");
const { makeBadge } = require('badge-maker');


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
  .then((response) => {
    writeToFile(response)
  })

//received from npmjs.com for making a badge (a blue badge with license name in it)
const format = {
  label: 'build',
  message: `${response.license}`,
  color: 'blue',
  style: 'flat'
}

var license = `${response.license}`;

//making the badge on the const format variable
const badge = makeBadge(format)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Boost Software License 1.0") {
    console.log(badge);
  } else if (license === "MIT License") {
    console.log(badge);
  } else if (license === "Apache License") {
    console.log(badge);
  } else if (license === "The Unilicense") {
    console.log(badge);
  } else if (license === "GNU General Public License v3.0") {
    console.log(badge);
  } else {
    console.log("");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Boost Software License 1.0") {
    console.log("https://www.boost.org/users/license.html");
  } else if (license === "MIT License") {
    console.log("https://opensource.org/license/mit/");
  } else if (license === "Apache License") {
    console.log("https://www.apache.org/licenses/LICENSE-2.0");
  } else if (license === "The Unilicense") {
    console.log("https://choosealicense.com/licenses/unlicense/");
  } else if (license === "GNU General Public License v3.0") {
    console.log("https://www.gnu.org/licenses/gpl-3.0.en.html");
  } else {
    console.log("");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge()
  renderLicenseLink()
}

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
          <p>${license}</p>
          <h2 style="border-bottom: 1px gainsboro solid;">## Contributing</h2>
          <p>${response.contribution}</p>
          <h2 style="border-bottom: 1px gainsboro solid;">## Tests</h2>
          <p>${response.test}</p>
          <h2 style="border-bottom: 1px gainsboro solid;">## Questions</h2>
          <p>For more questions or comments on the project, please reach out to the following below.</p>
          <p>Github Portfolio: <a href="malito:${response.github}">${response.github}</a></p>
          <p>Email: <a href="${response.email}">${response.email}</a></p>
        </body>

        <script src="./Develop/index.js"></script>

      </html>`
  fs.writeFile('index.html', readme, (err) =>
    err ? console.error(err) : console.log('Done!')
  )
}
// TODO: Create a function to initialize app
function init() {
  writeToFile()
  renderLicenseSection()
}

// Function call to initialize app
init();
