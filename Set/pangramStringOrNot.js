const prompt = require("./utils/promptSync");

let str = prompt("Enter a string: ");

let set = new Set();

for (let i = 0; i <= str.length - 1; i++) {
    const ch = str.charAt(i);
    set.add(ch);
}

console.log();
set.size === 26 ? console.log("String is Pangram") : console.log("String is Non-Pangram");