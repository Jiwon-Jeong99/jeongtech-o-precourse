function problem3(number) {
  check(number);
  return getClapNumbers(1, number, 0);
}

module.exports = problem3;
function getClapNumbers(cur, number, curClap) {
  if (cur == number) return curClap + haveToClap(number);
  return getClapNumbers(cur + 1, number, curClap + haveToClap(cur));
}
function haveToClap(number) {
  const strNumber = String(number);
  let clap = false;
  ['3', '6', '9'].forEach((str) => {
    if (strNumber.includes(str)) clap = true;
  });
  return clap;
}

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
