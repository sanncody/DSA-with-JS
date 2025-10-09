/* Description: Find the sum of all even digits in a given number. */

const prompt = require("../Nested Looping/utils/promptSync");

const num = Number(prompt("Enter a number: "));


let temp = num, sum = 0;

while (temp > 0) {
    let dig = temp % 10;

    if (dig % 2 === 0) {
        sum += dig;
    }

    temp = Math.floor(temp / 10);
}

process.stdout.write(`The sum of even digits in ${num} is: ${sum}`);