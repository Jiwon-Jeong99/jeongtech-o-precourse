function problem1(pobi, crong) {
  pobi.map(([left, right]) => {
    const leftMax = Math.max(getAddedNumber(left), getMultipliedNumber(left));
    const rightMax = Math.max(
      getAddedNumber(right),
      getMultipliedNumber(right)
    );
  });
  var answer;
  return answer;
}

module.exports = problem1;

function getAddedNumber(number) {
  const numberArray = getSliceNumberArray(number);
  return numberArray.reduce((sum, num) => sum + num);
}

function getSliceNumberArray(number) {
  const str = String(number);
  const stringArray = str.split('');
  return stringArray.map((str) => Number(str));
}

function getMultipliedNumber(number) {
  const numberArray = getSliceNumberArray(number);
  return numberArray.reduce((sum, num) => sum * num);
}
