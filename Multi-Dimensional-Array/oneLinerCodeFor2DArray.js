/* We can create a 2D array in a single line using `Array.from()` */

const arr = Array.from({ length: 3 }, () => Array(5).fill(0));

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(arr[i][j] + " ");
    }
    console.log();
}