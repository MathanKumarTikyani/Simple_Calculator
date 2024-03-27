#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of these operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Dvision", "Modulus"]
    },
]);
// conditions
if (userInput.operator === "Addition") {
    console.log(userInput.firstNumber + userInput.secondNumber);
}
else if (userInput.operator === "Multiplication") {
    console.log(userInput.firstNumber * userInput.secondNumber);
}
else if (userInput.operator === "Subtraction") {
    console.log(userInput.firstNumber - userInput.secondNumber);
}
else if (userInput.operator === " Division") {
    console.log(userInput.firstNumber / userInput.secondNumber);
}
else if (userInput.operator === "Modulus") {
    console.log(userInput.firstNumber % userInput.secondNumber);
}
else {
    console.log("Please select valid operator");
}
