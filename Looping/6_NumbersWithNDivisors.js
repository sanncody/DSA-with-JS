/* 
Problem: Find Numbers with Exactly N Divisors up to limit

Description:
Given two positive integers N and limit, find all numbers between 1 and limit (inclusive) that have exactly N divisors.

*/

const prompt = require("./utils/promptSync");

let N = Number(prompt("Enter how many divisor numbers will have: "));
let limit = Number(prompt("Enter a limit upto which numbers to be found: "));


function numbersWithNDivisorsUptoLimit(N, limit) {
    for (let i = 1; i <= limit; i++) {
        let countDivisors = 0;

        for (let k = 1; k <= i / 2; k++) {
            if (i % k === 0) {
                countDivisors++;
            }
        }
        countDivisors++;
        if (countDivisors === N) process.stdout.write(i + " ");
    }
}

numbersWithNDivisorsUptoLimit(N, limit);