const prompt = require('./utils/promptSync');

const N = Number(prompt("Enter a number: "));
console.log();

function logFromNto1(num) {
    if (num === 0) return;
    process.stdout.write(num + " ");

    logFromNto1(num-1);
}

logFromNto1(N);