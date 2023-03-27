const ERROR = 0;
const OK = 1;

function problem1(pobi, crong) {
  if (!isCorrect(pobi, crong)) return -1;

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

function checkNumberInRange(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 1 && numberArray >= 400) return ERROR;
  }
  return OK;
}

function checkNumberEvenOrOdd(left, right) {
  if (left % 2 == 0 || right % 2 == 1) return ERROR;
  return OK;
}
function checkContinuous(person) {
  const [left, right] = person;
  if (right - left != 1) return ERROR;
  return OK;
}
function isCorrect(pobi, crong) {
  if (!checkNumberInRange([...pobi, ...crong])) return ERROR;
  if (!checkNumberEvenOrOdd(pobi[0], pobi[1])) return ERROR;
  if (!checkNumberEvenOrOdd(crong[0], crong[1])) return ERROR;
  if (!checkContinuous(pobi) || !checkContinuous(crong)) return ERROR;
  return OK;
}
