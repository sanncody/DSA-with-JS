const prompt = require("./utils/promptSync");


const num = Number(prompt("Enter a number: "));

// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num - i; j++) {
//         process.stdout.write(" ");
//     }

//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num-i+1; j++) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}