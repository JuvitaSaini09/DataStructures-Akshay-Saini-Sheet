/**
 * Problem: Second Largest Digit in a String (LeetCode 1796)
 *
 * Given an alphanumeric string `s`, return the second largest numerical
 * digit that appears in the string. If it does not exist, return -1.
 *
 * An alphanumeric string consists only of lowercase English letters and digits.
 *
 * Examples:
 *
 * Input:  "dfa12321afd"
 * Output: 2
 * Explanation:
 * The digits present are [1, 2, 3]. The second largest digit is 2.
 *
 * Input:  "abc1111"
 * Output: -1
 * Explanation:
 * Only digit present is [1]. There is no second largest digit.
 *
 * Requirements:
 * • Consider only numerical digits (0–9).
 * • If fewer than two distinct digits exist, return -1.
 * • Digits may repeat.
 *
 * Constraints:
 * • 1 <= s.length <= 500
 * • s contains only lowercase English letters and digits.
 */


var secondHighest = function (s) {

    let max1 = -1;
    let max2 = -1;

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            let currentNumber = Number(ch)
            if (currentNumber > max1) {
                max2 = max1;
                max1 = currentNumber;
            } else if (currentNumber > max2 && currentNumber !== max1) {
                max2 = currentNumber;
            }
        }
    }

    return max2

};