/* Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder. */


const prompt = require("./utils/promptSync");

function GCDNormal(a, b) {
    let gcd = 1;
    let smallNum = Math.min(a, b);

    for (let i = 1; i <= smallNum; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function GCDEuclid(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const firstNum = prompt("Enter first number: ");
const secondNum = prompt("Enter second number: ");

console.log();

process.stdout.write(`The GCD of ${firstNum} and ${secondNum} is: ${GCDNormal(firstNum, secondNum)}`)