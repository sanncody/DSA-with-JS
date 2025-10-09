/* Description: Find the largest digit in a given number */

const prompt = require("../Nested Looping/utils/promptSync");

const num = Number(prompt("Enter a number: "));


let largest = 0;
function largestDigOfNumber (num) {
    while (num > 0) {
        dig = num % 10;
        num = Math.floor(num / 10);

        if (dig > largest) {
            largest = dig;
        }
    }
    return largest;
}

const maxDig = largestDigOfNumber(num);

console.log(`The largest digit of ${num} is: ${maxDig}`);
