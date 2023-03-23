function checkOddOrEven(inputNum) {
  return(inputNum%2 === 0)
}

function makeNumToEach(inputNum) {
  return inputNum.toString().split("").map((x) => parseInt(x));
}

function Sum(input) {
  return input.reduce((arr,cur) => arr+cur, 0);
}

function Multiple(input) {
  return input.reduce((arr, cur) => arr * cur, 1);
}

function problem1(pobi, crong) {
  pobiScore = [];
  crongScore = [];

  for (const page of pobi) {
    pobiEachPage = makeNumToEach(page);
    pobiSum = pageToEach.reduce((arr, cur) => arr + cur, 0);
    pobiMultiple = pageToEach.reduce((arr, cur) => arr * cur, 1);
    pobiScore.append(pobiSum);
    pobiScore.append(pobiMultiple);
  }
  pobiMax = Math.max(pobiScore);

  for (const number of crong) {
    let pageToEach = number.toString().split("").map((x) => parseInt(x));
    crongSum = pageToEach.reduce((arr, cur) => arr + cur, 0);
    crongMultiple = pageToEach.reduce((arr, cur) => arr * cur, 1);
    crongScore.append(crongSum);
    crongScore.append(crongMultiple);
  }
  crongMax = Math.max(crongScore);

  if (pobiMax > crongMax) return "1";
  if (pobiMax < crongMax) return "2";
  if (pobiMax === crongMax) return "0";
}

module.exports = problem1;
