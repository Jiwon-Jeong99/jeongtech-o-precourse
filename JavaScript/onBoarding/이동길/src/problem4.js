function problem4(word) {
  checkLength(word);
  return getReversedString(word);
}

function getReversedChar(char) {
  const asciiCode = char.charCodeAt(0);
  let newAscii;
  if (asciiCode >= 65 && asciiCode <= 90) newAscii = 155 - asciiCode;
  if (asciiCode >= 97 && asciiCode <= 122) newAscii = 219 - asciiCode;
  if (newAscii === undefined) return char;
  return String.fromCharCode(newAscii);
}

function getReversedString(str) {
  const stringArr = str.split('');
  return stringArr.map((char) => getReversedChar(char)).join('');
}

function checkLength(str) {
  if (str.length < 1 && str.length > 1000)
    throw new Error('문자열 길이는 1이상 1000이하여야 합니다.');
}
module.exports = problem4;
