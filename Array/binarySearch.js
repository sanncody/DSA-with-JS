// Time Complexity: O(log n)

// Binary Search is applied on sorted arrays

const prompt = require('./utils/promptSync');

const size = Number(prompt("Enter size of an array: "));

const arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`Array is: [ ${arr.join(', ')} ]`);

let start = 0, end = arr.length - 1;

console.log();
const target = Number(prompt("Enter target element to search: "));

let index;
while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) {
        index = mid;
        break;
    } else if (arr[mid] < target) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
    index = -1;
}

console.log();

index === -1 ? console.log(`The target element ${target} is not found`) : console.log(`The target element ${target} is found at index: ${index}`);