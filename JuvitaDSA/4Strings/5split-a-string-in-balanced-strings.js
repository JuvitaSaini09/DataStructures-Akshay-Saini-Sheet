/*
return count of balanced strings
*/

/* first solution came to my mind is to use a map to count the frequency of each character

*/
var balancedStringSplit = function (s) {
    let map = new Map();
    let freqOfSubString = 0;
    for (let char of s) {
        let lengthOfCurrentCharInMap = map.get(char) || 0
        map.set(char, lengthOfCurrentCharInMap + 1);
        if (map.get("L") && map.get("R") && map.get("L") === map.get("R")) {
            freqOfSubString++
            map.clear();
        }
    }
    return freqOfSubString;
};

/* but this is not the best solution because
i can use a single variable to count the frequency of each character
*/
var balancedStringSplit = function (s) {
    let balance = 0;
    let count = 0;

    for (char of s) {
        if (char === "R") balance++
        else balance--;
        if (balance === 0) count++;
    }

    return count;
}