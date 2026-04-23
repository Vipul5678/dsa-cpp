/**
 * Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let min = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - min;
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}

// ✅ Test
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1]));   // 0