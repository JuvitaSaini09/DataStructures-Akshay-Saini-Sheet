/**
 * @param {string} s
 * @return {boolean}
 */

var isAlphanumeric = function (char) {
    if (
        (char >= "0" && char <= "9") ||
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z")
    ) {
        return true;
    }
    return false;
};

var isPalindrome = function (s) {

    let cleanedString = [];

    for (char of s) {
        if (isAlphanumeric(char)) {
            cleanedString.push(char)
        }
    }

    let left = 0;
    let right = cleanedString.length - 1;

    while (left < right) {
        if (cleanedString[left].toUpperCase() !== cleanedString[right].toUpperCase()) return false
        left++;
        right--;
    }

    return true;

};