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


// var secondHighest = function(s) {

//     for(let char of s){
//         console.log(char);
        

//     }
// }

var secondHighest = function (s) {
    let firstlargest = -1;
    let secondlargest = -1;
    for (let i = 0; i < s.length; i++) {
      let ch = s[i];
      if (ch >= "0" && ch <= "9") {
        let num = Number(ch);
        if (num > firstlargest) {
          secondlargest = firstlargest;
          firstlargest = num;
        } else if (num < firstlargest && num > secondlargest) {
          secondlargest = num;
        }
      }
    }
    return secondlargest;
  };

console.log(secondHighest("dfa12321afd"))
