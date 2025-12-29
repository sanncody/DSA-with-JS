/* Variant 2 of Fibonacci Series by finding the particular term */

const prompt = require('./utils/promptSync');

const term = Number(prompt("Enter which term to be found: "));
console.log();

function fiboTermFinder(term) {
    if (term === 0 || term === 1) return term;

    return fiboTermFinder(term - 1) + fiboTermFinder(term - 2);
}

const fiboTerm = fiboTermFinder(term);
console.log(`The fibonacci term ${term} is: ${fiboTerm}`);
