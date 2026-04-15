/*
ques: 
Given a string s, return the sum of the number of vowels and the number of consonants.
*/

/**
 * @param {string} s
 * @return {number}
 */

// first solution came to my mind is to use a map to count the frequency of each vowel and consonant
var maxFreqSum = function (s) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let countOfVowels = new Map();
    let countOfConsonents = new Map();
    let maxVoweOfVowel = 0;
    let maxConsonentOfVowel = 0;


    for (let char of s) {
        if (vowels.has(char)) {
            let curentVowelCount = countOfVowels.get(char) || 0;
            countOfVowels.set(char, curentVowelCount + 1)
            maxVoweOfVowel = Math.max(curentVowelCount + 1, maxVoweOfVowel)
        } else {
            let curentConsonentCount = countOfConsonents.get(char) || 0;
            countOfConsonents.set(char, curentConsonentCount + 1)
            maxConsonentOfVowel = Math.max(curentConsonentCount + 1, maxConsonentOfVowel)
        }
    }

    return maxVoweOfVowel + maxConsonentOfVowel;
};

/*
 then I noticed the repeated code and bad var naming  so 2nd time  used single map and 
below is the code:
*/

var maxFreqSum = function (s) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let charFreqMap = new Map();
    let maxVowelFreq = 0;
    let maxConsonentFreq = 0;

    for (let char of s) {
        let currenCharCount = (charFreqMap.get(char) || 0) + 1;
        charFreqMap.set(char, currenCharCount)
        if (vowels.has(char)) {
            maxVowelFreq = Math.max(currenCharCount, maxVowelFreq)
        } else {
            maxConsonentFreq = Math.max(currenCharCount, maxConsonentFreq)
        }
    }

    return maxVowelFreq + maxConsonentFreq;
};