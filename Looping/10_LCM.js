/* Find the Least Common Multiple (LCM) of two numbers. */

const prompt = require("../Nested Looping/utils/promptSync");

const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));

function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}


function LCMEuclid(num1, num2) {
    return Math.abs(num1 * num2) / GCD(num1, num2);
}


// Without using formula or Euclid Algo
function LCMIterative(num1, num2) {
    let lcm = Math.max(num1, num2);

    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            return lcm;
        }
        lcm++;
    }
}

// const lcm = LCMEuclid(num1, num2);
const lcm = LCMIterative(num1, num2);
process.stdout.write(`The LCM of ${num1} and ${num2} is: ${lcm}`);
