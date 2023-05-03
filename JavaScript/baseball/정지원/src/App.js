const MissionUtils = require("@woowacourse/mission-utils");
const Model = require("./Model");

class App {
  constructor() {
    this.inputNumArr;
    this.randomNumArr;
  }

  showGameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  selectRandomNum() {
    const randomArr = [];
    for (let i = 0; i < 3; i++) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArr.includes(randomNum)) {
        randomArr.push(randomNum);
      } else {
        i--;
      }
    }
    this.randomNumArr = randomArr;
  }

  inputNum() { //promise 반환
    return new Promise((resolve) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
        let nums = [];
        do {
          nums.push(input % 10);
          input = Math.floor(input / 10);
        } while (input > 0);
        this.inputNumArr = nums;
        resolve(); //프로미스 완료
      });
    });
  }

  showResult() {
    const model = new Model(this.inputNumArr, this.randomNumArr);
    const strikeNum = model.getStrike();
    const ballNum = model.getBall();
    // const nothing = model.getNothing();
    if (strikeNum === 3) {
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
    } else if (strikeNum > 0 && ballNum > 0) {
      MissionUtils.Console.print(`${ballNum}볼 ${strikeNum}스트라이크`);
    } else if (strikeNum > 0 && ballNum === 0) {
      MissionUtils.Console.print(`${strikeNum}스트라이크`);
    } else if (strikeNum === 0 && ballNum > 0) {
      MissionUtils.Console.print(`${ballNum}볼`);
    } else {
      MissionUtils.Console.print("낫싱");
    }
  }

  async play() {
    this.showGameStart();
    this.selectRandomNum();
    await this.inputNum();
    this.showResult();
  }
}

const startGame = new App();
startGame.play();

module.exports = App;
