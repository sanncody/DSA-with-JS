/* Recursive way to print any string */

const prompt = require('./utils/promptSync');

const n = Number(prompt("Enter how many times to print the string: "));
console.log();
const str = prompt(`Enter a string to be printed ${n} times: `);

console.log();

function recursiveLog(num) {
    if (num === 0) return;
    
    console.log(str);

    recursiveLog(num - 1);
}

recursiveLog(n);

