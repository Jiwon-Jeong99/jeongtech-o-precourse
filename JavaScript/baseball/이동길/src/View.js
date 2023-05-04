const { Console } = require('@woowacourse/mission-utils');

class View {
  static startGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
  static gameResult([strike, ball]) {
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
      return;
    }
    if (strike === 0) {
      Console.print(`${ball}볼`);
      return;
    }
    if (ball === 0) {
      Console.print(`${strike}스트라이크`);
      return;
    }
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  static Input(callback) {
    Console.readLine('숫자를 입력해주세요 : ', callback);
  }
  static win() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  static retry(callback) {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {
        if (input == 1) callback();
        if (input == 2) Console.close();
      }
    );
  }
}
module.exports = View;
