// Description: A number is a Harshad number if it is divisible by the sum of its digits.

const prompt = require("./utils/promptSync");

let num = prompt("Enter a number: ");

function harshadNumber(num) {
    let sum = 0;

    while (num > 0) {
        lastDig = num % 10;
        sum += lastDig;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log();

num % harshadNumber(num) === 0 ? console.log("Harshad Number") : console.log("Not Harshad Number");