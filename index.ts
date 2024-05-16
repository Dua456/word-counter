#! /usr/bin/env node

import inquirer from "inquirer";

let answers : {
    Sentence : string
} = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter your sentence to count the word:"
    }
])

let words = answers.Sentence.trim().split(" ")
console.log(`your sentence word count is ${words.length}`);