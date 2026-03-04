/**
 * Problem: Palindrome Number (LeetCode 9)
 *
 * Given an integer `x`, return true if x is a palindrome,
 * and false otherwise.
 *
 * A palindrome number reads the same forward and backward.
 *
 * Examples:
 *
 * Input: 121
 * Output: true
 * Explanation:
 * 121 reads the same from left to right and right to left.
 *
 * Input: -121
 * Output: false
 * Explanation:
 * From left to right it reads -121, but from right to left it becomes 121-.
 *
 * Input: 10
 * Output: false
 * Explanation:
 * From right to left it reads 01, which is not the same.
 *
 * Requirements:
 * • Return true if the number is a palindrome.
 * • Return false otherwise.
 * • Negative numbers are not palindromes.
 *
 * Constraints:
 * • -2^31 <= x <= 2^31 - 1
 *
 * Follow-up:
 * Can you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //   let string = x.toString();
  //   let reversed = string.split("").reverse().join("");
  //   return string === reversed;
  let reverse = 0;
  let num = x;

  while (x > 0) {
    let r = x % 10;
    reverse = reverse * 10 + r;
    x = Math.floor(x / 10);
  }
  return num === reverse;
};
console.log(isPalindrome(121));
