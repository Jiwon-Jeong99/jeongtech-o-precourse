const HAVE_TO_RUN = 1;
const NOT_TO_RUN = 0;
function problem2(cryptogram) {
  check(cryptogram);
  while (checkDuplication(cryptogram)) {
    cryptogram = removeDuplication(cryptogram);
  }
  return cryptogram;
}

module.exports = problem2;

function checkLength(cryptogram) {
  if (cryptogram.length > 1000 || cryptogram.length < 1)
    throw new Error('길이는 1이상 1000이하여야 합니다.');
}
function checkChar(cryptogram) {
  const smallEng = /^[a-z]*$/;
  if (!smallEng.test(cryptogram))
    throw new Error('문자는 소문자 알파벳이어야만 합니다!');
}
function check(cryptogram) {
  checkLength(cryptogram);
  checkChar(cryptogram);
}
function checkDuplication(cryptogram) {
  for (let index = 0; index < cryptogram.length - 1; index++) {
    if (cryptogram[index] === cryptogram[index + 1]) return HAVE_TO_RUN;
  }
  return NOT_TO_RUN;
}
function removeDuplication(currentCryptogram) {
  let currentChar = '';
  const nextStageCryptogram = [];
  [...currentCryptogram].forEach((cur) => {
    if (currentChar != cur) {
      currentChar = cur;
      nextStageCryptogram.push(cur);
    } else {
      nextStageCryptogram.pop();
      currentChar = nextStageCryptogram[nextStageCryptogram.length - 1];
    }
  });
  return nextStageCryptogram.join('');
}
