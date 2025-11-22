const prompt = require("./utils/promptSync");

console.log();

const size = Number(prompt("Enter size of an array: "));
const arr = new Array(size);

console.log();

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log();
console.log(arr);
console.log();
const map = new Map();

for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        let elemCount = map.get(arr[i]);
        map.set(arr[i], elemCount + 1);
    } else {
        map.set(arr[i], 1);
    }
}

console.log();

for (let [key, value] of map) {
    console.log(key + " => " + value);
}