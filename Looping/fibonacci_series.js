/* Iterative Fibonacci Series */

const prompt = require('./utils/promptSync');

const terms = Number(prompt("Enter number of terms to print: "));
console.log();

let first = 0, second = 1;

process.stdout.write(first + " " + second + " ");

for (let i = 1; i <= terms - 2; i++) {
    let third = first + second;
    process.stdout.write(third + " ");
    first = second;
    second = third;
}
