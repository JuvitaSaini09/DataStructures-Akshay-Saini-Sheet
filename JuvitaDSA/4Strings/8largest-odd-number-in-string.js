/* question:Return the largest-valued odd integer 
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.
*/

var isOddNumber=function(num){
    if (num % 2 !== 0) return true;
    else return false;
}

var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (isOddNumber(Number(num[i]))) {
            return num.slice(0, i + 1);
        }
    }
    return "";
};