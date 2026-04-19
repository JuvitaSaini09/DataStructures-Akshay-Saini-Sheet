/**
Input: s = "the sky is blue"
Output: "blue is sky the"
 */

//add comment

var reverseWords = function (s) {
    let i = s.length - 1;
    let result = []

    while (i >= 0) {
        if (s[i] === " ") {
            i--;
            continue;
        }
        let j = i;
        while (s[j] != " " && j >= 0 ) {
            j--;
        }
        result.push(s.slice(j + 1, i + 1));
        i = j-1;
    }

    return result.join(" ")
};