const max = (a, b) => {
  return a > b ? a : b;
}

const sum = (num) => {
  let result = 0;

  result += num % 10;

  if(num >= 10) {
    num = Math.floor(num / 10);
    result += Math.floor(num % 10);

    if(num >= 10) {
      num = Math.floor(num / 10);
      result += Math.floor(num % 10);
    }
  }

  return result;
}

const mult = (num) => {
  let result = 1;

  result *= num % 10;

  if(num >= 10) {
    num = Math.floor(num / 10);
    result *= Math.floor(num % 10);

    if(num >= 10) {
      num = Math.floor(num / 10);
      result *= Math.floor(num % 10);
    }
  }
  
  return result;
}

function problem1(pobi, crong) {
  var answer;

  let [pobi_L, pobi_R] = pobi;
  let [crong_L, crong_R] = crong;

  if(pobi_L + 1 !== pobi_R || crong_L + 1 !== crong_R) return -1;
  if(pobi_L <= 1 || pobi_R >= 400 || crong_L <= 1 || crong_R >= 400) return -1;
  if(pobi_L % 2 !== 1 || crong_L % 2 !== 1) return -1;
  
  let pobi_score = max(max(sum(pobi_L), mult(pobi_L)), max(sum(pobi_R), mult(pobi_R)));
  let crong_score = max(max(sum(crong_L), mult(crong_L)), max(sum(crong_R), mult(crong_R)));

  answer = pobi_score > crong_score ? 1 : (pobi_score === crong_score ? 0 : 2);

  return answer;
}

module.exports = problem1;