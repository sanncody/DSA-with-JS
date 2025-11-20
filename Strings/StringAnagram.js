const prompt = require("./utils/promptSync");

const str1 = prompt('Enter string 1: ');
const str2 = prompt('Enter string 2: ');
console.log();

const freq = new Array(123).fill(0);

let isAnagram = true;

if (str1.length !== str2.length) {
    isAnagram = false;
} else {
    for (let i = 0; i < str1.length; i++) {
        const ascii = str1.charCodeAt(i);
        freq[ascii]++;
    }

    for (let i = 0; i < str2.length; i++) {
        const ascii = str2.charCodeAt(i);
        freq[ascii]--;
    }

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            isAnagram = false;
            break;
        }
    }
}

isAnagram ? console.log("Given strings are anagrams") : console.log("Given strings are 'not' anagrams"); 