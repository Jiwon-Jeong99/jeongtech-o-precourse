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

  inputNum() {
    //promise 반환
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
      this.showSelect();
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

  showSelect() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (input) => {
          if (input === 1) {
            this.main();
          } else if (input === 2) {
            MissionUtils.Console.close();
          } else {
            throw new Error("잘못된 값을 입력하셨습니다.");
          }
          resolve(); //프로미스 완료
        }
      );
    });
  }

  async main() {
    this.selectRandomNum();
    while (true) {
      await this.inputNum();
      await this.showResult();
    }
  }

  play() {
    this.showGameStart();
    this.main();
  }
}

const startGame = new App();
startGame.play();

module.exports = App;
