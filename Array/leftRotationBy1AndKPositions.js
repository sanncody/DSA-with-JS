const prompt = require('./utils/promptSync');

const size1 = Number(prompt("Enter size of an array: "));

const arr = new Array(size1);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(`The original array is: [ ${arr.join(', ')} ]`);

let last = arr[0];
for (let i = 0; i <= arr.length - 2; i++) {
    arr[i] = arr[i + 1];
}

arr[arr.length - 1] = last;

console.log();
console.log(`Array after Left rotation by 1: [ ${arr.join(', ')} ]`);


console.log();

// Left Rotation by K positions (Brute force)
let k = Number(prompt('Enter number of positions: '));

k = k % arr.length;
for (let j = 1; j <= k; j++) {
    let last = arr[0];
    for (let i = 0; i <= arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = last;
}

console.log();
console.log(`The Left rotation after ${k} elements is: [ ${arr.join(', ')} ]`);

console.log();



// Left Rotation by K positions (Second method)
let K = Number(prompt('Enter number of positions: '));

const temp = new Array(arr.length);

K = K % arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + K) % arr.length];
}

console.log();
console.log(`The Left rotation after ${k} elements is: [ ${temp.join(', ')} ]`);

console.log();



// Left Rotation by 'pos' positions (Optimised without taking any extra space and loop)
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

reverse(0, pos - 1);
reverse(pos, anotherArr.length - 1);
reverse(0, anotherArr.length - 1);

console.log();
console.log(`The Left rotation after ${pos} elements is: [ ${anotherArr.join(', ')} ]`);