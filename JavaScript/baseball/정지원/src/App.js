const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.inputNumArr = inputNumArr;
    this.randomNumArr = radomNumArr;
  }

  showGameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  selectRandomNum() {
    randomArr = [];
    for (let i = 0; i < 3; i++) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      } else {
        i--;
      }
    }
    this.randomNumArr = randomArr;
  }

  inputNum() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      let nums = [];
      do {
        nums.push(input % 10);
        input = Math.floor(input / 10);
      } while (input > 0);
      return nums;
    });
    this.inputNumArr = nums;
  }

  play() {
    this.showGameStart();
    this.selectRandomNum();
    this.inputNum();
  }
}

module.exports = App;
