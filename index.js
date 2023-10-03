const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const SVG = require('./lib/svg');
const createLogo = require('./lib/shapes')

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const questions = 
inquirer 
    .prompt([
    {
    name: "text",
    type: "maxlength-input",
    message: "Enter up to 3 characters for your logo.",
    maxLength: 3
    },

    {
    name: "textColor",
    type: "input",
    message: "Choose your text color.",
    },

    {
    name: "shape",
    type: "list",
    message: "Choose the shape for your logo.",
    choices: ["circle", "triangle", "square"]
    },

    {
    name: "shapeColor",
    type: "input",
    message: "Choose the color for your shape."
    }
])

.then((answers) => {
    console.log(answers);
    fs.writeFile('logo.svg', createLogo(answers), function (err) {
        if (err) throw err; 
    console.log('Generated logo.svg!')})
})