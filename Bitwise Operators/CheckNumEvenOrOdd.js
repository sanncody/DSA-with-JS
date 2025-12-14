const prompt = require("./utils/promptSync");

let num = Number(prompt("Enter a number: "));

console.log();

console.log((num & 1) === 0 ? "Even" : "Odd");
