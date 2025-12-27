const prompt = require('./utils/promptSync');

const N = Number(prompt("Enter a number: "));
console.log();

function recursiveSum(num) {
    if (num === 1) return num;

    return num + recursiveSum(num - 1);
}

const sum = recursiveSum(N);
console.log(`The sum of ${N} numbers is: ${sum}`);