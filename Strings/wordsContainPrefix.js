const prompt = require("./utils/promptSync");


const size = Number(prompt("Enter number of words to be inserted in 'words' array: "));

const words = new Array(size);

console.log();
for (let i = 0; i < words.length; i++) {
    words[i] = prompt(`Enter word ${i + 1}: `);
}
console.log();

const pref = prompt("Enter prefix which needs to checked in 'words' array: ");

console.log();

let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
        count++;
    }
}

console.log();
console.log(`Pref '${pref}' is coming ${count} times in [ ${words.join(', ')} ] array`);
