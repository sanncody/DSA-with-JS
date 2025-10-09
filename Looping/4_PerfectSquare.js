/* Description: A number is a perfect square if it is the square of an integer. */

const prompt = require("./utils/promptSync");

function perfectSquare(num) {
    if (num < 0) {
        return "Squares of negative integer cannnot be calculated";
    }

    let perfectSq = Math.sqrt(num);

    return Number.isInteger(perfectSq) ? "Perfect Sqaure" : "Not Perfect Square";
}

let num = Number(prompt("Enter a number: "));

let checkPerfectSq = perfectSquare(num);
console.log(checkPerfectSq);