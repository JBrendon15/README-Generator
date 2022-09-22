// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contribution, test, github, email, license} = data;
  return `# ${title} 
  
  ## Description
  ${description}

  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [Contributors](#contributors)

  [Test](#test)

  [Questions](#questions)

  [License](#license)


  ## Installation
  Right click the 'index.js' file and click 'Open in Integrated Terminal' type the following in your terminal:
  \`\`\`
  ${installation}
  \`\`\`

  ## Usage
  \`\`\`
  ${usage}
  \`\`\`

  ## Contributing
  ${contribution}

  ## Test
  \`\`\`
  ${test}
  \`\`\`

  ## Questions
  If you have any questions you can contact me at https://github.com/${github} or you can email me any questions at ${email}.


  ${license}`;
}

module.exports = generateMarkdown;
