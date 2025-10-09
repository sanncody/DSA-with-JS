/* Description: Find all prime factors of a number. */

const prompt = require("./utils/promptSync");

let num = Number(prompt("Enter a number: "));


function primeFactors(num) {
    process.stdout.write(`The prime factors of ${num} are: `); 
    
    // Handling case of 2 separately
    while (num % 2 === 0) {
        process.stdout.write(2 + " ");
        num = Math.floor(num / 2);
    }

    // Handling case of odd factors
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        while (num % i === 0) {
            process.stdout.write(i + " ");
            num = Math.floor(num / i);
        }
    }

    if (num > 2) {
        process.stdout.write(num + " ");
    }
}

primeFactors(num);