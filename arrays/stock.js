//brute force = all possible combinations  the timecomplexity is 0(n2);
//

let priceOfIthDay = [7, 1, 5, 3, 6, 4];
let stock = (price) => {
  let min = price[0];
  let maxProfit = 0;
  for (let i = 1; i < price.length; i++) {
    if (price[i] - min > maxProfit) {
      maxProfit = price[i] - min;
    }
    if (price[i] < min) {
      min = price[i];
    }
  }
  return maxProfit;
};

console.log(stock(priceOfIthDay));
