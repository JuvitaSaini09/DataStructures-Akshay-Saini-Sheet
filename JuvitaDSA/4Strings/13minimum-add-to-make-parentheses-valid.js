

/**

find the coutn of required parenthsis which can balance the string
Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3
 */

var minAddToMakeValid = function (s) {
    let stack = [];
    let requiredParenthesesFreq = 0;
    for (let parentheses of s) {
        if (parentheses === "(") {
            stack.push(parentheses)
        } else {
            if (stack.length === 0) requiredParenthesesFreq++;
            else stack.pop();
        }
    }
    return requiredParenthesesFreq + stack.length;
};

var minAddToMakeValid = function (s) {
    let open = 0;
    let move = 0;
    for (let parentheses of s) {
        if (parentheses === "(") open++;
        else if (open < 1) move++;
        else open--;
    }
    return open + move;

}