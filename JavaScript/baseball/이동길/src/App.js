const Computer = require('./Computer');
const View = require('./View');
class App {
  play() {
    View.startGame();
    this.computer = new Computer();
    View.Input(this.gameProgress.bind(this));
  }

  gameProgress(input) {
    this.computer.updateState(input);
    this.printResult();
    if (this.computer.isWin()) {
      View.win();
      View.retry(this.play.bind(this));
    }

    View.Input(this.gameProgress.bind(this));
  }

  printResult() {
    View.gameResult(this.computer.getState());
  }
}

module.exports = App;
const a = new App();
a.play();
