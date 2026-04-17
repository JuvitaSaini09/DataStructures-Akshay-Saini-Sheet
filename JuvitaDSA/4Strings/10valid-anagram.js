/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:

Input: s = "anagram", t = "nagaram"

Output: true
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();

    for (let char of s) {
        let countOfCharInMap = (map.get(char) || 0) + 1
        map.set(char, countOfCharInMap)
    }

    for (let char of t) {
        if (!map.has(char)) return false;
        if (map.get(char) === 0) return false;
        map.set(char, map.get(char) - 1)
    }
    return true;
};
