/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

 */

var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0]; //"flowers"
    // ["flower","flow","flight"]
    for (let i = 1; i < strs.length; i++) {
        let currentCommonPrefix = "";
        let currentWord = strs[i]; //"flow"
        let j = 0;
        while (j < currentWord.length && j < commonPrefix.length) {
            if (currentWord[j] !== commonPrefix[j]) {
                break;
            }
            currentCommonPrefix += currentWord[j]
            j++;
        }
        if (commonPrefix === "") return "";
        commonPrefix = currentCommonPrefix;
    }
    return commonPrefix;
};

/*

review 

*/