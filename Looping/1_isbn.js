/* Description: An ISBN(International Standard Book Number) is a unique 10 - digit 
number assigned to books.The ISBN is valid if the sum of its digits, each 
multiplied by its position(1 to 10), is divisible by 11. */

const prompt = require("./utils/promptSync");

let num = Number(prompt("Enter a number: "));

let temp = num, count = 0;

// Count digits first
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

if (count !== 10) {
    console.log("Not a valid ISBN (must be 10 digits)");
} else {
    let pos = 10, sum = 0;

    while (num > 0) {
        lastDig = num % 10;
        num = Math.floor(num / 10);
        sum += (lastDig * pos);
        pos--;
    }
    sum % 11 === 0 ? console.log("Valid ISBN Number") : console.log("Invalid ISBN Number");
}

