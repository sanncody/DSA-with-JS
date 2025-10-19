const prompt = require('../utils/promptSync');

const size = Number(prompt("Enter size of an array: "));

const arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`Array is: [ ${arr.join(', ')} ]`);

let n = arr.length;

// Phases must be arrLength - 1
for (let phase = 0; phase < n - 1; phase++) {
    // Operations in each phase must be arr.length - phase - 1
    for (let op = 0; op < n - phase - 1; op++) {
        if (arr[op] > arr[op + 1]) {
            let temp = arr[op];
            arr[op] = arr[op + 1];
            arr[op + 1] = temp;
        }
    }
}

console.log();
console.log(`Bubble Sorted array is: [ ${arr.join(', ')} ]`);