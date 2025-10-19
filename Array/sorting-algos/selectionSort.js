const prompt = require('../utils/promptSync');

const size = Number(prompt("Enter size of an array: "));

const arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`Array is: [ ${arr.join(', ')} ]`);

let n = arr.length;
for (let i = 0; i < n - 1; i++) {
    let small = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[small]) {
            small = j;
        }
    }
    
    if (n !== small) {
        let temp = arr[small];
        arr[small] = arr[i];
        arr[i] = temp;
    }
}

console.log();
console.log(`Selection Sorted array is: [ ${arr.join(', ')} ]`);