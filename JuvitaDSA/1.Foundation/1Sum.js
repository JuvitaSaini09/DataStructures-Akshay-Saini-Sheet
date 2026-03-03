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
     return args.reduce((total, currentvalue) => {
       return total + currentvalue;
    },0)
}

function sumwithstring(...args) {
    return args.reduce((total, currentvalue) => {
        if (typeof currentvalue === 'string') {
            return total
        } else {
            return total + currentvalue
        }
    },0)
}

//For the purpose of user debugging.
console.log("sum of sum(100, 200, 300, 400) is:",sum(100, 200, 300, 400))

module.exports = sum