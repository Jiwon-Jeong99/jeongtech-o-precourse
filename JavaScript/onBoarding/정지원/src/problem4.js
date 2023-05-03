// 문자 -> 아스키코드 변환
const changeCharToAscii = (inputArray) => {
  const asciiArr = inputArray.map((char) => char.charCodeAt());
  return asciiArr;
};

// 청개구리로 아스키코드 변환
const reverseAscii = (inputArray) => {
  const reverseArr = inputArray.map((ascii) => {
    if (ascii < 65 || (90 < ascii && ascii < 97) || ascii > 122) return ascii;
    if (65 <= ascii && ascii <= 90) return 155 - ascii;
    if (97 <= ascii && ascii <= 122) return 219 - ascii;
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
  console.log(asciiArr);
  const reverseAsciiArray = reverseAscii(asciiArr);
  console.log(reverseAsciiArray);
  const finalString = changeAsciiToChar(reverseAsciiArray);
  console.log(finalString);
  return finalString;
}

module.exports = problem4;
