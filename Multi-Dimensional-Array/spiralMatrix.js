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

const spiralMatrix = [];
let minRow = 0, maxRow = matrix.length - 1;
let minCol = 0, maxCol = matrix[0].length - 1;
const len = matrix.length * matrix[0].length;

while (spiralMatrix.length < len) {
    // Top row
    for (let i = minCol; i <= maxCol && spiralMatrix.length < len; i++) {
        spiralMatrix.push(matrix[minRow][i]);
    }
    minRow++;

    // Right column
    for (let i = minRow; i <= maxRow && spiralMatrix.length < len; i++) {
        spiralMatrix.push(matrix[i][maxCol]);
    }
    maxCol--;

    // Bottom row
    for (let i = maxCol; i >= minCol && spiralMatrix.length < len; i--) {
        spiralMatrix.push(matrix[maxRow][i]);
    }
    maxRow--;

    // Left column
    for (let i = maxRow; i >= minRow && spiralMatrix.length < len; i--) {
        spiralMatrix.push(matrix[i][minCol]);
    }
    minCol++;
}

console.log(spiralMatrix);