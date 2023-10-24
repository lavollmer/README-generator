const { makeBadge, ValidationError } = require('badge-maker');
import { makeBadge, ValidationError } from 'badge-maker'

//received from npmjs.com for making a badge (a blue badge with license name in it)
const format = {
  label: 'build',
  message: '${response.license}',
  color: 'blue',
  style: 'flat'
}

//making the badge on the const format variable
const badge = makeBadge(format)

// try {
//   makeBadge({ response })
// } catch (e) {
//   console.log(e) // ValidationError: Field `message` is required
// }

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
