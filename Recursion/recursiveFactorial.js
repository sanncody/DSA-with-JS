const prompt = require('./utils/promptSync');

const N = Number(prompt("Enter a number: "));
console.log();

function recursiveFac(num) {
    if (num === 1) return num;

    return num * recursiveFac(num - 1);
}

const factorial = recursiveFac(N);
console.log(`The factorial of ${N} is: ${factorial}`);