const prompt = require("../Nested Looping/utils/promptSync");

const num = Number(prompt("Enter a number: "));

let sum = 0, sq = num * num;

while (sq > 0) {
    specificDig = sq % 10;
    sum += specificDig;
    sq = Math.floor(sq / 10);
}

num === sum ? console.log("Neon Number") : console.log("Non Neon Number");