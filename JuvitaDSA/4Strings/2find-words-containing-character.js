/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {

    let result = [];
    for (let i = 0; i < words.length; i++) {

        // for first word
        let currentWord = words[i];

        // loop the word
        let lengthOfCurrentWord = currentWord.length;
        let j = 0;
        while (j < lengthOfCurrentWord) {
            if (currentWord[j] === x) {
                result.push(i)
                break;
            }
            j++;
        }

    }
    return result;
};