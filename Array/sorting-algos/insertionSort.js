const prompt = require('../utils/promptSync');

const size = Number(prompt("Enter size of an array: "));

const arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`Array is: [ ${arr.join(', ')} ]`);

let n = arr.length;

for (let i = 1; i < n; i++) {
    let pivot = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > pivot) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j + 1] = pivot;
}

console.log();
console.log(`Insertion Sorted array is: [ ${arr.join(', ')} ]`);