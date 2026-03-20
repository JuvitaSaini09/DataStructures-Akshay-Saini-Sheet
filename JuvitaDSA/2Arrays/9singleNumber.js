// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ans = 0;
    for (let n of nums) {
        ans = ans ^ n
    }
    return ans;
};



var singleNumber = function(nums) {
    const map = {};

    for (let n of nums) {
        map[n] = (map[n] || 0) + 1;
    }

    for (let key in map) {
        if (map[key] === 1) {
            return Number(key);
        }
    }
};