var singleNumber = function (nums) {

    let ans = 0;
    for (let j = 0; j < nums.length; j++) {
        // Duplicates will cancel out; the unique number remains.
        ans ^= nums[j];
    }
    return ans;

};