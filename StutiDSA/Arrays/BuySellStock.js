var maxProfit = function (array) {
  let buyPrice = array[0];
  let maxProfit = 0;

  for (let i = 1; i < array.length; i++) {
    let profit = array[i] - buyPrice;
    if (array[i] < buyPrice) {
      buyPrice = array[i];
    } else if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

// prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

