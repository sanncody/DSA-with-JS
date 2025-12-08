/**
 * "First Letter to appear twice"
 * 
 * Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note:

- A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.

- s will contain at least one letter that appears twice.
 */

const prompt = require("./utils/promptSync");

console.log();

const str = prompt("Enter a String: ");

console.log();

const repeatedCharacter = (str) => {
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        
        // Condition checking whether character has came again or not, if came again then frequency has to be '2' and we can return directly
        if (map.has(ch)) {
            return ch;
        } else {
            map.set(ch, 1);
        }
    }
};

const result = repeatedCharacter(str);
console.log(`The repeated character in "${str}" is: ${result}`);