const prompt = require('./utils/promptSync');

const num = Number(prompt("Enter a number: "));
console.log();

function sumOfDigit(num) {
    if (num < 10) return num;

    let rem = num % 10;
    let sum = rem + sumOfDigit(Math.floor(num / 10));

    return sum;
}

const digitSum = sumOfDigit(num);

console.log(`The sum of digits in ${num} is: ${digitSum}`)