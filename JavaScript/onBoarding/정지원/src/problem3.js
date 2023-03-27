function problem3(number) {
  for(let i=1; i<number+1; i++){
    const numArray = makeNumEachToArray(i);
  }
}

function makeNumEachToArray(inputNum) {
  return inputNum
    .toString()
    .split("")
    .map((x) => parseInt(x));
}

module.exports = problem3;
