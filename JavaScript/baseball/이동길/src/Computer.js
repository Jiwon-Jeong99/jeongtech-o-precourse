const { Random } = require('@woowacourse/mission-utils');

class Computer {
  constructor() {
    this.answer = '';
    this.strike = 0;
    this.ball = 0;
    this.setRandomNumber();
  }

  setRandomNumber() {
    const randomSet = new Set();
    while (randomSet.size < 3) {
      randomSet.add(Random.pickNumberInRange(1, 9));
    }
    randomSet.forEach((num) => {
      this.answer += String(num);
    });
  }

  updateState(inputValue) {
    this.strike = 0;
    this.ball = 0;
    this.answer.split('').forEach((num, i) => {
      const inputArr = inputValue.split('');
      if (inputArr[i] === num) this.strike += 1;
      if (inputArr[i] != num && inputArr.includes(num)) this.ball += 1;
    });
  }

  isWin() {
    return this.strike === 3;
  }

  isNothing() {
    return this.strike === 0 && this.ball === 0;
  }

  getState() {
    return [this.strike, this.ball];
  }
}

module.exports = Computer;
