/**
 * Problem: Implement a sum function
 *
 * Design a function `sum` that accepts any number of numerical arguments
 * and returns their total.
 *
 * The function must support both fixed and variable numbers of arguments
 * using JavaScript features.
 *
 * Examples:
 * sum(1, 2, 3)          → 6
 * sum(10)               → 10
 * sum()                 → 0
 * sum(5, -5, 10, 20)   → 30
 * sum(100, 200, 300)   → 600
 *
 * Requirements:
 * • Inputs will always be numbers (integers or floats).
 * • If no arguments are provided, return 0.
 * • Must handle a variable number of arguments.
 * • Must correctly handle negative numbers.
 * • Do NOT use eval() or the Function() constructor.
 */

function sum(...args) {
    const total = args.reduce((acc, currentValue) => acc + currentValue, 0)
    return total;
}

function sum(...args) {
    // const total = args.reduce((acc, currentValue) => acc + currentValue, 0)
    // return total;
    let total = 0;
    for(let num of args){
        total =+num;
        
    }
    return total;
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum