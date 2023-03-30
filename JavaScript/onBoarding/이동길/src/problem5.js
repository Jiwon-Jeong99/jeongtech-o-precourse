function problem5(money) {
  return getMoneyCountArray(money);
}

function getMoneyCountArray(money) {
  const moneyStandard = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const moneyArray = [0, 0, 0, 0, 0, 0, 0, 0];
  let index = 0;
  while (money != 0) {
    moneyArray[index] = Math.floor(money / moneyStandard[index]);
    money = money % moneyStandard[index];
    index++;
  }
  return moneyArray;
}
module.exports = problem5;
