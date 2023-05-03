const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.inputNum = inputNum;
  }

  showGameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  selectRandomNum() {
    randomNumArr = [];
    for (i = 0; i < 3; i++) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNumArr.push(randomNum);
    }
  }

  inputNum() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {

    })
  }

  play() {
    this.showGameStart();
    this.selectRandomNum();
  }
}

module.exports = App;
