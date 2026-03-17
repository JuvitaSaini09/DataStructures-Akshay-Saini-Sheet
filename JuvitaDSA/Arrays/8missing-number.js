/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return expectedSum - sum;
};

/* Notes:

if we xor 2 same numbers, it will return 0

0-n xor with the nums array, we will get the missing number

var missingNumber = function(nums) {
    let xor = nums.length; // 5

    for (let i = 0; i < nums.length; i++) {
        xor ^= i ^ nums[i];
    }

    return xor;
};





*/