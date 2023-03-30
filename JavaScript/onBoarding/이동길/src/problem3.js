function problem3(number) {
  check(number);
  return getClapNumbers(1, number, 0);
}

module.exports = problem3;
function getClapNumbers(cur, number, curClap) {
  if (cur == number) return curClap + getCurrentNumberClap(number);
  return getClapNumbers(cur + 1, number, curClap + getCurrentNumberClap(cur));
}
function getCurrentNumberClap(number) {
  const strNumber = String(number);
  let clapCount = 0;
  [...strNumber].forEach((numberChar) => {
    if (numberChar === '3' || numberChar === '6' || numberChar === '9')
      clapCount += 1;
  });
  return clapCount;
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
