function problem5(money) {
  var answer = [];
  let buck = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for(let i = 0; i < buck.length; i++) {
    if(Math.floor(money / buck[i]) > 0) {
      answer.push(Math.floor(money / buck[i]));
      money -= answer[answer.length - 1] * buck[i]; 
    }
    else {
      answer.push(0);
    }
  }
  
  return answer;
}

module.exports = problem5;