/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let sArr = s.split(" ")
    if (pattern.length !== sArr.length) return false;

    let patterTos = new Map();
    let StoPattern = new Map();


    for (let i = 0; i < sArr.length; i++) {
        let currentpatterLetter = pattern[i];
        let currentWord = sArr[i]

        if (patterTos.has(currentpatterLetter) && patterTos.get(currentpatterLetter) !== currentWord) {
            return false;
        }

        if (StoPattern.has(currentWord) && StoPattern.get(currentWord) !== currentpatterLetter) {
            return false;
        }

        patterTos.set(currentpatterLetter, currentWord)
        StoPattern.set(currentWord, currentpatterLetter)

    }
    return true;
};