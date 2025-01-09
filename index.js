// TODO: Include packages needed for this application
import fs from "fs"; //Defult installed (core module) (read, write, update, delete, and manage files and directories.)
import inquirer from "inquirer"; //Yes I need to install. Allows interaction through prompts in command line.
import path from "path"; //Defult installed (core module) create file path
import generateMarkdown from "./utils/generateMarkdown.js"; // Pulling in JSON File - with format for the README file.

// TODO: Create an array of questions for user input //lesson 23
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your projects title? ",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a short description explaining the what, why, and how of your project",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? \n- Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples for use. \n- Include file paths to screenshots or images",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles. \n- List any third-party assets that require attribution, \n- If you followed tutorials, include links to those here as well.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select which license is used in this project",
    choices: [
      "License-Apache_2.0",
      "GNU General Public License v3.0",
      "MIT",
      "BSC 2-Clause",
      "Boost1.0",
      "Creative Commons v1.0",
      "other",
      "none",
    ],
  },
  {
    type: "input",
    name: "features",
    message: "If your project has a lot of features, list them here.",
  },
  {
    type: "input",
    name: "contribute",
    message: "Guidelines for other developers on contribute if desired",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
  },
  {
    type: "input",
    name: "questions",
    message: "Enter Name, \n- email, and \n- link to github repository",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("File created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating README.md file...");
    writeToFile("./README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
