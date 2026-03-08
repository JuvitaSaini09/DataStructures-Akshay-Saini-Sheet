var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  } else {
    return (n & (n - 1)) === 0;
  }
};
// If we subtract 1 from a power of two, the single 1 bit becomes 0 and all bits to the right become 1.
// When we perform a bitwise AND between n and n-1, it removes the rightmost set bit.
// If the number had only one set bit, the result becomes 0

// Pro Interview Tip

// If you say this extra line, interviewers get impressed:

// This trick works because n & (n-1) removes the rightmost set bit.


/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function (n) {
//     if (n <= 0) return false;
//     while (n % 2 === 0) {
//         n = n / 2;

//     }
//     return n === 1;
// };



// 👉 Only powers of 2 become 1 after repeatedly dividing by 2.

// Any other number will stop at something other than 1.
