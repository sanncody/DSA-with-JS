// Arrange all zeroes to left and all ones to right
const prompt = require("./utils/promptSync");

const size = Number(prompt('Enter size of an array: '));

let arr = new Array(size);

for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = Number(prompt(`Enter element(0/1) ${i + 1}: `));
}

console.log();
console.log(`The original array is: [ ${arr.join(', ')} ]`);

let i = 0, j = 0;
while (i < arr.length) {
    // When arr[i] searches 0 then swap otherwise just increment i
    if (arr[i] === 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++; // Increment j when swapping is performed
    }
    i++;
}

console.log();
console.log(`The arranged 0/1 array is: [ ${arr.join(', ')} ]`);