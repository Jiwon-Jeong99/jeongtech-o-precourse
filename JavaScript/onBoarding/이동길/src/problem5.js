function problem5(money) {
  moneyCheck(money);
  return getMoneyCountArray(money);
}

function getMoneyCountArray(money) {
  const moneyStandard = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const moneyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let index = 0;
  while (money != 0) {
    moneyArray[index] = Math.floor(money / moneyStandard[index]);
    money = money % moneyStandard[index];
    index++;
  }
  return moneyArray;
}

function moneyCheck(money) {
  if (money <= 0 && money > 1000000) {
    throw new Error('돈은 1원 이상 100만원 이하여야합니다!');
  }
}
module.exports = problem5;
