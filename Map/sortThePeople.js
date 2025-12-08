/**
 * Sort the People 

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
 */

const prompt = require("./utils/promptSync");

console.log();

const size = Number(prompt("Enter size of an array: "));

const names = new Array(size);
const heights = new Array(size);

console.log();

for (let i = 0; i < names.length; i++) {
    names[i] = prompt(`Enter name ${i + 1}: `);
}
console.log();

for (let i = 0; i < heights.length; i++) {
    heights[i] = Number(prompt(`Enter height ${i + 1}: `));
}
console.log();

const sortThePeople = (names, heights) => {
    let map = new Map();

    for (let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);

    let ans = new Array(names.length);

    for (let i = 0; i < heights.length; i++) {
        ans[i] = map.get(heights[i]);
    }

    return ans;
};

console.log(sortThePeople(names, heights));