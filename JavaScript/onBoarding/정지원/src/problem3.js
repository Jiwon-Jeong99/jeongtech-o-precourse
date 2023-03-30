function problem3(number) {
  let count = 0;
  for (let i = 1; i < number + 1; i++) {
    const numArray = makeNumEachToArray(i);
    count += filterThreeSixNine(numArray);
  }
  return count;
}

function makeNumEachToArray(inputNum) {
  return inputNum
    .toString()
    .split("")
    .map((x) => parseInt(x));
}

function filterThreeSixNine(inputArray) {
  return inputArray.filter(
    (element) => element === 3 || element === 6 || element === 9
  ).length;
}

module.exports = problem3;
