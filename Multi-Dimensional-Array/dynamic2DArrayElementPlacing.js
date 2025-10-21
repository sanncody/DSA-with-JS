const prompt = require("./utils/promptSync");

const rows = Number(prompt("Enter rows of an array: "));
const cols = Number(prompt("Enter columns of an array: "));

const arr = new Array(rows);

console.log();
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt(`Enter row ${i + 1} col ${j + 1}: `));
    }
    console.log();
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(`${arr[i][j]} `);
    }
    console.log();
}
