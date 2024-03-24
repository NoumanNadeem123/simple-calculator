#! /usr/bin/env node

import inquirer from "inquirer";
// asking questions from user through inquirer
let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firestNumber"},
    {message: "Second First Number", type: "number", name: "secondNumber"},
    {
        message: "Select one operator to perform operators",
        type: "list",
        name: "operator",
        choices:["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

//console.log(answers);
// condional statments if-else
if(answers.operator === "Addition"){
console.log(answers.firestNumber + answers.secondNumber)
}
else if(answers.operator === "Subtraction"){
    console.log(answers.firestNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firestNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firestNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}