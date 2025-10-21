/* A jagged array has variable-length sub-arrays. */

const prompt = require('./utils/promptSync');

const outerArrSize = Number(prompt("Enter Outer array size: "));

const arr = new Array(outerArrSize);

for (let i = 0; i < arr.length; i++) {
    const innerArrSize = Number(prompt("Enter Inner array size: "));
    arr[i] = new Array(innerArrSize);
    console.log();
    for (j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt(`Enter row ${i + 1} col ${j + 1}: `));
    }
    console.log();
}

console.log();
console.log(arr);


