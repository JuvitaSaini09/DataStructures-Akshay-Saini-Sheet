/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) return 0;
    let l = 0;
    let r = 1;
    let profit = 0;
    // [7,1,5,3,6,4]

    for (let r = 1; r < prices.length; r++) {
        if (prices[r] > prices[l]) {
            profit = Math.max(prices[r] - prices[l], profit);
        } else {
            l = r;
        }
    }

    return profit;
};