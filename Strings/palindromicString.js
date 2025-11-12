const prompt = require('./utils/promptSync');

const str = prompt("Enter a string: ");

function isPalindrome(str) {
    let start = 0, end = str.length - 1;

    while (start <= end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log();
isPalindrome(str) ? console.log("Palindromic String") : console.log("Non-Palindromic String");