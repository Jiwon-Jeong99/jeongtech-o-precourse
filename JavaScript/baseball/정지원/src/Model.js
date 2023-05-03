class Model {
  constructor(inputArr, randomArr) {
    this.inputArr = inputArr;
    this.randomArr = randomArr;
  }

  getStrike() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.inputArr[i] === this.randomArr[i]) count += 1;
      return count;
    }
  }



}

module.exports = Model;
