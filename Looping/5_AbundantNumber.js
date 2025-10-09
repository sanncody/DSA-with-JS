/* Description: A number is abundant if the sum of its proper divisors/factors is greater 
than the number itself. */

const prompt = require('./utils/promptSync');

function abundantNum(num) {
    console.log();

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum > num ? "Abundant Number" : "Non Abundant Number";
}

const checkAbundant = abundantNum(Number(prompt('Enter a number: ')));
console.log(checkAbundant);
