// https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let currentStreak = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            currentStreak++;
        } else {
            currentStreak = 0;
        }

        maxCount = Math.max(maxCount, currentStreak)
    }

    return maxCount
};