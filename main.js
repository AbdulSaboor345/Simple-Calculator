#!/usr/bin/env node
// Importing inquirer & Chalk
import inquirer from "inquirer";
import chalk from "chalk";
// Printing a welcome message
let line = chalk.gray('='.repeat(51));
let wcMsg = `\n\t${line}\n${chalk.bold.blue("\tWelcome to Abdul Saboor - CLI Simple Calculator\n")}\t${line}\n`;
console.log(wcMsg);
// Prompting the user for 1st question
let answers = await inquirer.prompt([
    { message: (chalk.cyan("Enter First Number:")), type: "number", name: "firstNumber" },
]);
// Line Break
console.log("");
// Prompting the user for 2nd question
let answer2 = await inquirer.prompt([
    { message: (chalk.cyan("Enter Second Number:")), type: "number", name: "secondNumber" }
]);
// Line Break
console.log("");
// Prompting the user for operation of their choice
let options = await inquirer.prompt([
    {
        message: (chalk.yellow("Select one operator to perform operation")),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Line Break
console.log("");
// Using If-Else for calculations
if (options.operator === "Addition") {
    console.log(answers.firstNumber + answer2.secondNumber);
}
else if (options.operator === "Subtraction") {
    console.log(answers.firstNumber - answer2.secondNumber);
}
else if (options.operator === "Multiplication") {
    console.log(answers.firstNumber * answer2.secondNumber);
}
else if (options.operator === "Division") {
    console.log(answers.firstNumber / answer2.secondNumber);
}
// Line Break
console.log("");
