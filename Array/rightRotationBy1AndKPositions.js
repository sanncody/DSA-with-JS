const prompt = require('./utils/promptSync');

const size = Number(prompt("Enter size of an array: "));

const arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`The original array is: [ ${arr.join(', ')} ]`);

let first = arr[arr.length - 1];
for (let i = arr.length - 1; i >= 1; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = first;

console.log();
console.log(`Array after Right rotation by 1: [ ${arr.join(', ')} ]`);

console.log();

// Right Rotation by K positions (Brute force)
let k = Number(prompt('Enter number of positions: '));

k = k % arr.length;
for (let j = 1; j <= k; j++) {
    let first = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = first;
}

console.log();

console.log(`The Right rotation after ${k} elements is: [ ${arr.join(', ')} ]`);

console.log();

// Right Rotation by K positions (Second Method)
let K = Number(prompt('Enter number of positions: '));

const temp = new Array(arr.length);

K = K % arr.length;
for (let i = 0; i <= arr.length - 1; i++) {
    temp[(i + K) % arr.length] = arr[i];
}

// for (let i = 0; i < temp.length; i++) {
//     temp[i] = arr[i];
// }

console.log();
console.log(`The Right rotation after ${K} elements is: [ ${temp.join(', ')} ]`);

console.log();


// Right Rotation by 'pos' positions (Optimised without taking any extra space and loop)
const size2 = Number(prompt("Enter size of an array: "));

const anotherArr = new Array(size2);

for (let i = 0; i < anotherArr.length; i++) {
    anotherArr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();

console.log(`The original array is: [ ${anotherArr.join(', ')} ]`);

console.log();

let pos = Number(prompt('Enter number of positions: '));

pos = pos % anotherArr.length;
function reverse(i, j) {
    while (i < j) {
        let temp = anotherArr[i];
        anotherArr[i] = anotherArr[j];
        anotherArr[j] = temp;
        i++;
        j--;
    }
}

reverse(0, anotherArr.length - 1);
reverse(0, pos - 1);
reverse(pos, anotherArr.length - 1);

console.log();
console.log(`The Right rotation after ${pos} elements is: [ ${anotherArr.join(', ')} ]`);
