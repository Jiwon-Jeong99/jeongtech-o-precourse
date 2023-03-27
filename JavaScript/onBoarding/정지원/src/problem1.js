function problem1(pobi, crong) {
  // if (!checkEverythingOk(pobi, crong)) return -1;

  // let pobiScore = [];
  // let crongScore = [];

  const pobiScore = pobi.map((page) => {
    pobiEachPage = makeNumEachToArray(page);
    return Math.max(Sum(pobiEachPage), Multiple(pobiEachPage));
  });

  // for (const page of pobi) {
  //   pobiEachPage = makeNumEachToArray(page);
  //   pobiSum = Sum(pobiEachPage);
  //   pobiMultiple = Multiple(pobiEachPage);
  //   pobiScore.push(pobiSum);
  //   pobiScore.push(pobiMultiple);
  // }
  const pobiMax = Math.max(...pobiScore);

  const crongScore = crong.map((page) => {
    crongEachPage = makeNumEachToArray(page);
    return Math.max(Sum(crongEachPage), Multiple(crongEachPage));
  });

  // for (const number of crong) {
  //   crongEachPage = makeNumEachToArray(number);
  //   crongSum = Sum(crongEachPage);
  //   crongMultiple = Multiple(crongEachPage);
  //   crongScore.push(crongSum);
  //   crongScore.push(crongMultiple);
  // }
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

// 두수의 차가 영어로 뭔지 몰라 minus라고 함
function checkMinusOne(leftNum, rightNum) {
  if (rightNum - leftNum === 1) {
    return true;
  }
  return false;
}

function checkRange(leftNum, rightNum) {
  if ((1 <= leftNum, rightNum <= 400)) {
    return true;
  }
  return false;
}

// 모든 예외사항을 포함해 true, false 반환하는 함수
function checkEverythingOk(pobi, crong) {
  // const concatArray = [pobi, crong];
  // concatArray.forEach((object) => {
  //   if (
  //     checkOddOrEven(object[0], object[1]) &&
  //     checkMinusOne(object[0], object[1]) &&
  //     checkRange(object[0], object[1])
  //   )
  //     return true;
  //   return false;
  // });
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
