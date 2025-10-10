const prompt = require("./utils/promptSync");

const size = Number(prompt('Enter size of an array: '));

let arr = new Array(size);

// Copied Array where we put the reverse of original array
let revArr = new Array(arr.length);

for (let i = 0; i <= arr.length-1; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`The original array is: [ ${arr.join(', ')} ]`);

let i = 0;
for (let j = arr.length - 1; j >= 0; j--) {
    revArr[i] = arr[j];
    i++;
}

console.log();
console.log(`The reversed array is: [ ${revArr.join(', ')} ]`);