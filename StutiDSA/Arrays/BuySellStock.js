var maxProfit = function (array) {
    let buyprice = array[0];
    let Mprofit = 0;
    for (let j = 1; j < array.length; j++) {
       let sellingPrice = array[j];
        let Profit = sellingPrice - buyprice;
        if (Profit > Mprofit) {
            Mprofit = Profit;

        }
         if (sellingPrice < buyprice) {
            buyprice = sellingPrice;
        }

    }
    return Mprofit;

}