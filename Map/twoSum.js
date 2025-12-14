/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 * 
 */

const prompt = require("./utils/promptSync");

console.log();

const size = Number(prompt("Enter size of an array: "));

const numbers = new Array(size);

console.log();

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(prompt(`Enter number ${i + 1}: `));
}
console.log();

const target = Number(prompt("Enter the target: "));
console.log();

const twoSum = (nums, target) => {
    let map = new Map();

    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            ans[0] = map.get(target - nums[i]);
            ans[1] = i;
        } else {
            map.set(nums[i], i);
        }
    }

    return ans;
};
console.log();

console.log(twoSum(numbers, target));