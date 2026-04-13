/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// Set + Lookup pattern
var numJewelsInStones = function (jewels, stones) {
    let totalLength = 0;
    let set = new Set(jewels);
    for (let j = 0; j < stones.length; j++) {
        if (set.has(stones[j])) {
         totalLength++;
        }
    }
    return totalLength;
};