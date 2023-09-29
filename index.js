const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');


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
    name: "text-color",
    type: "list",
    message: "",
    choices: ["blue", "red", "green", "yellow", "brown", "black", "white", "pink"]
    },

    {
    name: "shape",
    type: "list",
    message: "",
    choices: ["circle", "triangle", "square"]
    },

    {
    name: "shape-color",
    type: "",
    message: ""
    }
])

.then((data) => {
    fs.writeFile('logo.svg','Whatever goes here', function (err) {
        if (err) throw err; 
    console.log('Generated logo.svg!')})
})