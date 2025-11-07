const prompt = require('./utils/promptSync');

const rows = Number(prompt("Enter rows of an array: "));
const cols = Number(prompt("Enter columns of an array: "));

const matrix = Array.from({ length: rows }, () => Array(cols));

console.log();

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = Number(prompt(`Enter row ${i + 1} and column ${j + 1}: `));
    }
}

console.log();
for (let i = 0; i < matrix[0].length; i++) {
    for (let j = i; j < matrix.length; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}

console.log();

for (let i = 0; i < matrix.length; i++) {
    let startCol = 0, endCol = matrix[i].length - 1;
    while (startCol < endCol) {
        let temp = matrix[i][startCol];
        matrix[i][startCol] = matrix[i][endCol];
        matrix[i][endCol] = temp;
        startCol++;
        endCol--;
    }
}

console.log(matrix);
