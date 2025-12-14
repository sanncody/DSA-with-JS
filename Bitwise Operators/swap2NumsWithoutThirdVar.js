const prompt = require("./utils/promptSync");

let num1 = Number(prompt("Enter First number: "));
let num2 = Number(prompt("Enter Second number: "));

console.log();

console.log("Before Swapping");
console.log(`num1 = ${num1} and num2 = ${num2}`);

num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;

console.log();

console.log("After Swapping");
console.log(`num1 = ${num1} and num2 = ${num2}`);

