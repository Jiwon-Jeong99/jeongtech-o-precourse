const hasSuccessiveChar = (input) => {
  for(let i = 0; i < input.length - 1; i++){
      if(input[i] === input[i + 1]) return true;
  }
  return false;
};

function problem2(cryptogram) {
  var answer;
  let j = 0;
  while(hasSuccessiveChar(cryptogram)){
      for(let i = 0; i < cryptogram.length - 1; i++){
          if(cryptogram[i] === cryptogram[i + 1]){
              console.log(cryptogram);
              for(j = i; cryptogram[i] === cryptogram[j]; j++);
              cryptogram = cryptogram.substring(0, i) + cryptogram.substring(j, cryptogram.length);
              i--;
          }
      }
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;