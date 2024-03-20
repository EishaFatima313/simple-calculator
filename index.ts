#!/usr/bin/env node
import inquirer from 'inquirer';

const answer = await inquirer.prompt([
  { message: "Enter your First number", type: "number", name: "firstNumber" },
  { message: "Enter your Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform the operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// Conditional statement

if(answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select a valid operator");
}

console.log('THE END');