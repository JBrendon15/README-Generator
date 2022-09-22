// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License'){
    return '';
  }
  else {
    return renderLicenseLink(license);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Mozilla Public':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'Boost Software':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      break;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License'){
    return 'No license available.'
  }
  else{
    return `Distributed under the ${license} License.`
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contribution, test, github, email, license} = data;
  return `# ${title} 
  ${renderLicenseBadge(license)}

  
  ## Description
  \n-----------------------------------\n
  ${description}

  ## Table of Contents
  \n-----------------------------------\n
  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Test](#test)

  [Questions](#questions)

  [License](#license)


  ## Installation
  \n-----------------------------------\n
  Right click the 'index.js' file and click 'Open in Integrated Terminal' type the following in your terminal:
  \`\`\`
  ${installation}
  \`\`\`

  ## Usage
  \n-----------------------------------\n
  \`\`\`
  ${usage}
  \`\`\`

  ## Contributing
  \n-----------------------------------\n
  ${contribution}

  ## Test
  \n-----------------------------------\n
  \`\`\`
  ${test}
  \`\`\`

  ## Questions
  \n-----------------------------------\n
  Any Questions? Contact me:
  
  Github - https://github.com/${github}
  
  Email - ${email}
  
  
  ## License
  \n-----------------------------------\n
  ${renderLicenseSection(license)}

  `;
}

module.exports = generateMarkdown;
