// We have done this using Bitmap

const prompt = require("./utils/promptSync");

let str = prompt("Enter a string: ");

str = str.replaceAll(" ", ""); // This is just to ignore spaces in string

let freq = new Array(123).fill(0);

for (let i = 0; i < str.length; i++) {
    const ascii = str.charCodeAt(i);
    freq[ascii]++;
}

for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
        console.log(`${String.fromCharCode(i)} -> ${freq[i]}`);
    }
}