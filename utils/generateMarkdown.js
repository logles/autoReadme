// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    "License-Apache_2.0":
      "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    "GNU General Public License v3.0":
      "https://img.shields.io/badge/License-GPLv3-blue.svg",
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    "BSD 2-Clause":
      "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
    "Boost1.0": "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    "Creative Commons v1.0":
      "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
    Other: "",
  };
  if (license !== "none") {
    return `License Badge:(${licenseBadge[license]})`;
  }
  return "";
}

// TODO: Create a function that returns the license link // If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "License-Apache_2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0",
    MIT: "https://opensource.org/licenses/MIT",
    "BSD 2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
    "Boost1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "Creative Commons v1.0":
      "https://creativecommons.org/publicdomain/zero/1.0/",
    Other: "",
  };

  if (license !== "none") {
    return `License Link:(${licenseLinks[license]})`;
  }
  return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `##License
     This is using the ${license} license `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

##Description
  ${responses.description}

##Table of Contents
  [Description](##description)
  [Installation](##installation)
  [Usage](##usage)
  [Credits](##credits)
  [License](##license)
  [Badge](##badge)
  [Features](##features)
  [Contribute](##contribute)
  [Tests](##tests)

##Installation
  ${responses.installation}

##Usage
  ${responses.usage}

##Credits
  ${responses.credits}

  ${renderLicenseSection(responses.license)}
  ${renderLicenseLink(responses.license)}

##Badge
  ${renderLicenseBadge(responses.license)}
 
##features
  ${responses.features}

##How to contibute
  ${responses.contribute}
   
##Testing
  ${responses.tests}
      
`;
}

export default generateMarkdown;
