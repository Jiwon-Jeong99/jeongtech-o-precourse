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

function problem4(word) {
  const wordArray = [...word];
}

module.exports = problem4;
