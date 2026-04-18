/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let map = new Map();
    // let result = [];

    for (let char of strs) {
        let currentCharSorted = char.split("").sort().join("")
        if (!map.has(currentCharSorted)) {
            map.set(currentCharSorted, [char])
        } else {
            const prevChars = map.get(currentCharSorted);
            map.set(currentCharSorted, [...prevChars, char])
        }
    }

    // for(let [_,value] of map){
    //     result.push(value);
    // }

    return [...map.values()];

};

var groupAnagrams = function (strs) {

    let map = new Map();

    for (let word of strs) {
        let key = word.split("").sort().join("");
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(word)
    }

    return [...map.values()];

};