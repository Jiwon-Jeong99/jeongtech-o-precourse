function problem1(pobi, crong) {
  let pobiScore = [];
  let crongScore = [];

  for (const page of pobi) {
    pobiEachPage = makeNumEachToArray(page);
    // console.log(pobiEachPage);
    pobiSum = Sum(pobiEachPage);
    pobiMultiple = Multiple(pobiEachPage);
    pobiScore.push(pobiSum);
    pobiScore.push(pobiMultiple);
  }
  const pobiMax = Math.max(...pobiScore);
  console.log(pobiMax);

  for (const number of crong) {
    crongEachPage = makeNumEachToArray(number);
    // console.log(pobiEachPage);
    crongSum = Sum(crongEachPage);
    crongMultiple = Multiple(crongEachPage);
    crongScore.push(crongSum);
    crongScore.push(crongMultiple);
  }
  const crongMax = Math.max(...crongScore);
  console.log(crongMax);

  if (pobiMax > crongMax) return 1;
  if (pobiMax < crongMax) return 2;
  if (pobiMax === crongMax) return 0;
}

function checkOddOrEven(inputNum) {
  return inputNum % 2 === 0;
}

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
