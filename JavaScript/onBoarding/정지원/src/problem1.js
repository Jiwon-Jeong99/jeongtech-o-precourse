function problem1(pobi, crong) {
  if (!checkEverythingOk(pobi, crong)) return -1;

  const pobiScore = pobi.map((page) => {
    pobiEachPage = makeNumEachToArray(page);
    return Math.max(Sum(pobiEachPage), Multiple(pobiEachPage));
  });
  const pobiMax = Math.max(...pobiScore);

  const crongScore = crong.map((page) => {
    crongEachPage = makeNumEachToArray(page);
    return Math.max(Sum(crongEachPage), Multiple(crongEachPage));
  });
  const crongMax = Math.max(...crongScore);

  if (pobiMax > crongMax) return 1;
  if (pobiMax < crongMax) return 2;
  if (pobiMax === crongMax) return 0;
}

// 예외사항 처리
function checkOddOrEven(leftNum, rightNum) {
  if (leftNum % 2 === 1 && rightNum % 2 === 0) {
    return true;
  }
  return false;
}

function checkAbsOne(leftNum, rightNum) {
  if (rightNum - leftNum === 1) {
    return true;
  }
  return false;
}

function checkRange(leftNum, rightNum) {
  if ((1 <= leftNum, rightNum <= 400)) return true;
  return false;
}

// 모든 예외사항을 포함해 true, false 반환하는 함수
function checkEverythingOk(pobi, crong) {
  if (!checkOddOrEven(...pobi)) return false;
  if (!checkMinusOne(...pobi)) return false;
  if (!checkRange(...pobi)) return false;
  if (!checkOddOrEven(...crong)) return false;
  if (!checkMinusOne(...crong)) return false;
  if (!checkRange(...crong)) return false;
  return true;
}

// 로직 함수
function makeNumEachToArray(inputNum) {
  return inputNum
    .toString()
    .split("")
    .map((x) => parseInt(x));
}

function Sum(input) {
  return input.reduce((arr, cur) => arr + cur, 0);
}

function Multiple(input) {
  return input.reduce((arr, cur) => arr * cur, 1);
}

module.exports = problem1;
