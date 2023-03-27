function problem3(number) {
  check(number);
  var answer;
  return answer;
}

module.exports = problem3;
function checkNumberAmount(number) {
  if (number < 1 || number > 1000)
    throw new Error('숫자는 1이상 1000이하여야합니다!');
}
function checkNumber(number) {
  const num = /[0-9]/;
  if (!num.test(number)) throw new Error('입력은 숫자여야합니다!');
}
function check(number) {
  checkNumberAmount(number);
  checkNumber(number);
}
