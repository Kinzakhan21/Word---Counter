#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colorfull Welcome message 
console.log(chalk.bold.cyanBright("\n \t \t Wrlcome to Kinza - Word Counter"));
console.log("=".repeat(60));
// Prompt the user to Enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Triming the sentence and spiliting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));
