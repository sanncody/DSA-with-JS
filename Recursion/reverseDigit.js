const prompt = require('./utils/promptSync');

const num = Number(prompt("Enter a number: "));
console.log();

let rev = 0;
function reverseDigit(num, rev) {
    if (num === 0) return rev;

    return reverseDigit(Math.floor(num / 10), rev * 10 + num % 10);
}

const digitReversal = reverseDigit(num, rev);
console.log(`The reverse of ${num} is: ${digitReversal}`);