var findMaxConsecutiveOnes = function (nums) {
    let noOfOnes = 0;
    let NoOfMaxOnes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            noOfOnes++;
            NoOfMaxOnes = Math.max(noOfOnes,NoOfMaxOnes);

        }
        else {
            noOfOnes = 0;
        }
    }

    return NoOfMaxOnes;
};