const prompt = require('./utils/promptSync');

const rows = Number(prompt("Enter rows of an array: "));
const cols = Number(prompt("Enter columns of an array: "));

const arr = new Array(rows);

console.log();
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
    for (let j = 0; j < arr[i].length; j++) {
        console.log();
        arr[i][j] = Number(prompt(`Enter row ${i + 1} and column ${j + 1}: `));
    }
}

console.log();
console.log("The original matrix is: ");
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(arr[i][j] + " ");
    }
    console.log();
}


console.log();
console.log("The transpose matrix is: ");
let res = new Array(cols);
for (let i = 0; i < arr.length; i++) {
    res[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
        res[i][j] = arr[j][i];
        process.stdout.write(res[i][j] + " ");
    }
    console.log();
}