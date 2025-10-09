const prompt = require("./utils/promptSync");

const num = Number(prompt("Enter a number: "));

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 2*num - 1; j++) {
        if (i === j || i + j === 2 * num) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}