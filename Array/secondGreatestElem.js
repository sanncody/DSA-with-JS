const prompt = require("./utils/promptSync");

const size = Number(prompt('Enter size of an array: '));

let arr = new Array(size);

arr[0] = Number(prompt(`Enter element 1: `));
arr[1] = Number(prompt(`Enter element 2: `));

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
    if (arr[i] > max) {
        sMax = max;
        max = arr[i];
    } else if (sMax < arr[i] && arr[i] !== max) {
        sMax = arr[i];
    }
}

console.log();

console.log(`The second largest element from ${arr.join(', ')} is: ${sMax}`);