var moveZeroes = function(nums) {

    let i = 0;

    for (let j = 0; j < nums.length; j++) {

        if (nums[j] !== 0) {

            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;

        }

    }

};

// this i wrote above one by chat gpt
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        let currentNumber = nums[j];
        if (nums[i] === 0 && nums[j] !== 0) {
            nums[i] = nums[j];
            nums[j]=0;
        }

        if (nums[i] !== 0) {
            i++
        }
    }
};
