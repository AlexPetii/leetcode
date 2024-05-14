function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let currentMin = prices[0];
    for (let i = 0; i < prices.length; i++) {
        currentMin = Math.min(currentMin, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - currentMin);
    }
    return maxProfit;
};