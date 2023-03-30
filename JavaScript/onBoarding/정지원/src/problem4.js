// 문자 -> 아스키코드 변환
const changeCharToAscii = (inputArray) => {
  const asciiArr = inputArray.map((char) => char.charCodeAt());
  return asciiArr;
};

// 청개구리로 아스키코드 변환
const reverseAscii = (inputArray) => {
  const reverseArr = inputArray.map((ascii) => {
    if (ascii < 64 || 90 < ascii < 97 || ascii > 122) ascii;
    if (65 <= ascii <= 90) 155 - ascii;
    if (97 <= ascii <= 122) 219 - ascii;
  });
  return reverseArr;
};

// 아스키코드 -> 문자 변환
const changeAsciiToChar = (inputArray) => {
  const stringAscii = String.fromCharCode(...inputArray);
  return stringAscii;
};

function problem4(word) {
  const wordArray = [...word];
  const asciiArr = changeCharToAscii(wordArray);
  const reverseAsciiArray = reverseAscii(asciiArr);
  const finalString = changeAsciiToChar(reverseAsciiArray);
  return finalString;
}

module.exports = problem4;
