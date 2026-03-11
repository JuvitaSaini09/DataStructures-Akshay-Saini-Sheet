//121. Best Time to Buy and Sell Stock

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

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

    while (r < prices.length) {
        if (prices[r] > prices[l]) {
            profit = Math.max(prices[r] - prices[l], profit);
        }
        else {
            l = r;
        }
        r++;
    }

    return profit;
};