const prompt = require("./utils/promptSync");

const str = prompt("Enter a string: ");

console.log();
console.log("The original string is: ", str);

let toggled = "";
for (let i = 0; i <= str.length - 1; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
        toggled += String.fromCharCode(ascii + 32);
    } else if (ascii >= 97 && ascii <= 122) {
        toggled += String.fromCharCode(ascii - 32);
    } else {
        toggled += str.charAt(i); // case when there is non-alphabetical character, it can remain unchanged and printed as it is
    }
}

console.log();
console.log("The toggled string is: ", toggled);