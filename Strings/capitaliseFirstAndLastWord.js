const prompt = require("./utils/promptSync");

const str = prompt("Enter a string: ");

const strArr = str.split(' ');

let resultantStr = "";
for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (word.length <= 2) {
        resultantStr += word.toUpperCase() + " ";
    } else {
        resultantStr += word.charAt(0).toUpperCase() 
                        + word.substring(1, word.length - 1) 
                        + word.charAt(word.length - 1).toUpperCase() + " ";
    }
}

console.log(resultantStr);
