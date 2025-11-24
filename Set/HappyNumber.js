/*
    A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.

 */

const prompt = require("./utils/promptSync");

let n = Number(prompt("Enter a number: "));

let set = new Set();

let isHappy = false;
while (true) {
    let sum = 0;
    while (n !== 0) {
        let dig = n % 10;
        sum += (dig * dig);
        n = Math.floor(n / 10);
    }

    if (sum === 1) {
        isHappy = true;
        break;
    }
    if (set.has(sum)) {
        isHappy = false;
        break;
    }

    set.add(sum);
    n = sum;
}

isHappy ? console.log("Happy Number") : console.log("Non-Happy Number");