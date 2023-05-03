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

//   findElement(element) {
//     if (
//       element === this.randomArr[0] ||
//       element === this.randomArr[1] ||
//       element === this.randomArr[2]
//     ) {
//       return true;
//     }
//   }

//   getNothing() {
//     if (this.inputArr.some(findElement)) {
//       return false;
//     } else {
//       return true;
//     }
//   }
}

module.exports = Model;
