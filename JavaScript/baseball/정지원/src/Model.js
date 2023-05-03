class Model {
  constructor(inputArr, randomArr) {
    this.inputArr = inputArr;
    this.randomArr = randomArr;
  }

  getStrike() {
    let strikeCount = 0;
    for (let i = 0; i < 3; i++) {
      if (this.inputArr[i] === this.randomArr[i]) strikeCount += 1;
      return strikeCount;
    }
  }

  getBall() {
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (
        this.inputArr.includes(this.randomArr[i]) &&
        this.inputArr[i] !== this.randomArr[i]
      )
        ballCount += 1;
      return ballCount;
    }
  }
}

module.exports = Model;
