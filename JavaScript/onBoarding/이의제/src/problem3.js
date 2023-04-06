// number는 1 이상 10,000 이하인 자연수이다.
const countNumbers = (number, numList) => {
  let count = 0;

  while(number >= 10){
    if(numList.includes(number % 10)){
      count++;
    }

    number = Math.floor(number / 10);
  }

  if(numList.includes(number % 10)){
    count++;
  }

  number = Math.floor(number / 10);

  return count;
};

function problem3(number) {
  var answer = 0;

  for(let i = 1; i <= number; i++){
    answer += countNumbers(i, [3, 6, 9]);
  }

  return answer;
}

module.exports = problem3;