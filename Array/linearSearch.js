// Time Complexity: O(n)

const prompt = require('./utils/promptSync');

const size = Number(prompt("Enter size of an array: "));

const arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`Array is: [ ${arr.join(', ')} ]`);

console.log();
const target = Number(prompt("Enter target element to search: "));

let index = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break;
    }
}

console.log();

index === -1 ? console.log(`The target element ${target} is not found`) : console.log(`The target element ${target} is found at index: ${index}`);