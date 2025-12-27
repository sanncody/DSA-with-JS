const prompt = require('./utils/promptSync');

const N = Number(prompt("Enter a number: "));
console.log();

function logFrom1toN(num) {
    if (num === 0) return;
    
    logFrom1toN(num-1);
    
    process.stdout.write(num + " ");
}

logFrom1toN(N);