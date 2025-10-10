const prompt = require("./utils/promptSync");

let size = Number(prompt("Enter size of an array: "));

let arr = new Array(size), sum = 0, max = 0, min = Infinity;

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number((prompt(`Enter element ${i + 1}: `)));

    // Calculate Sum of array elements
    sum += arr[i];
    
    // Calculate max of array elements
    max = Math.max(arr[i], max);
    
    // Calculate min of array elements
    min = Math.min(arr[i], min);
}
console.log(arr);


console.log(`The sum of ${arr.join(', ')} is: ${sum}`);
console.log(`The maximum element from ${arr.join(', ')} is: ${max}`);
console.log(`The minimum element from ${arr.join(', ')} is: ${min}`);