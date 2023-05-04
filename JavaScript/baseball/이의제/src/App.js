const MissionUtils = require('@woowacourse/mission-utils');

class App {
  number = "";

  readLineAsync() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine('입력하셈', (result) => {
        console.log(result);
        resolve(result);
      });
    });
  }

  init() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.number += MissionUtils.Random.pickNumberInRange(1, 9).toString();
    while(true) { 
      let random = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if(!this.number.includes(random)) {
        this.number += random;
        break;
      }
    }
    while(true) { 
      let random = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if(!this.number.includes(random)) {
        this.number += random;
        break;
      }
    }

    return this.number;
  }

  game() {

  }

  count(input) {
    let [strike, ball] = [0, 0];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (input[i] === this.number[j] && i === j) {
          console.log(i, j);
          strike++;
        }
        else if (input[i] === this.number[j] && i !== j) {
          console.log(i, j);
          ball++;
        }
      }
    }
    return [strike, ball];
  }

  result([strike, ball]) {
    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }
    else if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
    }
    else if (strike === 0) {
      MissionUtils.Console.print(ball + "볼");
    }
    else if (ball === 0) {
      MissionUtils.Console.print(strike + "스트라이크");
    }
    else {
      MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
    }
    return false;
  }

  async play() {    
    this.init();
    
    while(true){
      this.number = await this.readLineAsync();
      let flag = this.result(this.count(this.number));

      if(flag) break;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
