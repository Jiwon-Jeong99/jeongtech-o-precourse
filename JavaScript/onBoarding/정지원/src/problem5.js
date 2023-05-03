// 파이썬에서의 //는 JS에 존재x
function quo(money, cost) {
  quotient = Math.floor(money / cost);
  return quotient;
}

function remain(money, cost) {
  remainder = money % cost;
  return remainder;
}

function problem5(money) {
  const result = [];
  const cost = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < cost.length; i++) {
    result.push(quo(money, cost[i]));
    money = remain(money, cost[i]);
  }
  return result;
}

module.exports = problem5;
