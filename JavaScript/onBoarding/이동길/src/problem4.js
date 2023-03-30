function problem4(word) {
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
module.exports = problem4;
