function problem1(pobi, crong) {
  const pobiMaxArray = pobi.map((number) =>
    Math.max(getAddedNumber(number), getMultipliedNumber(number))
  );
  const pobiMax = Math.max(...pobiMaxArray);

  const crongMaxArray = crong.map((number) =>
    Math.max(getAddedNumber(number), getMultipliedNumber(number))
  );
  const crongMax = Math.max(...crongMaxArray);
  var answer = getResult(pobiMax, crongMax);
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

function getResult(leftNumber, rightNumber) {
  if (leftNumber > rightNumber) return 1;
  if (leftNumber < rightNumber) return 2;
  if (leftNumber === rightNumber) return 0;
}
