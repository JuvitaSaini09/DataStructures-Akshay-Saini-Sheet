var missingNumber = function (nums) {
    // let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];

    // }
    // const expectedSum = nums.length * (nums.length+1) /2;
    // return expectedSum-sum;

    let xor= nums.length;
    for(let i=0; i< nums.length;i++){
        xor= xor^i^nums[i];

    }
    return xor;
};