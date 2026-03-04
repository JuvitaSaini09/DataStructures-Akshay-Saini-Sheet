/**
 * Problem: Count Numbers Less Than Zero
 *
 * Given an array `arr` of numbers, return the count of elements
 * strictly less than 0.
 *
 * Examples:
 *
 * Input: [-1, 0, 1]
 * Output: 1
 *
 * Input: [-2, -5, -7]
 * Output: 3
 *
 * Input: [0, 2, 3]
 * Output: 0
 *
 * Input: []
 * Output: 0
 *
 * Requirements:
 * • Input must be an array of finite numbers.
 * • Return false for non-array inputs.
 * • Return false if array contains non-number values.
 * • Return false if array contains NaN, Infinity, or -Infinity.
 */

function countNegatives(arr) {
  let count =0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
 
}
console.log(countNegatives([-2,-5,-7]));



// function countNegatives(arr) {
//   if (!Array.isArray(arr)) return false;

//   let count = 0;

//   for (const value of arr) {
//     if (!Number.isFinite(value)) {
//       return false;
//     }
//     if (value < 0) count++;
//   }

//   return count;
// }

module.exports = { countNegatives };
