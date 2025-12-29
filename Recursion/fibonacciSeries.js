/* Recursive Fibonacci Series */

const prompt = require('./utils/promptSync');

const terms = Number(prompt("Enter number of terms to print: "));
console.log();

let first = 0, second = 1;

process.stdout.write(first + " " + second + " ");

function recursiveFibo(terms, first, second) {
    if (terms === 0) return
    let third = first + second;
    process.stdout.write(third + " ");
    recursiveFibo(terms - 1, second, third);
}

recursiveFibo(terms - 2, first, second);