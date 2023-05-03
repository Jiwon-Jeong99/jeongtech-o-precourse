// "제이엠제이슨" ->
/*
 * {
 *  "제이" : 2,
 *  "이엠" : 1,
 *  "엠제" : 1,
 *  "이슨" : 1
 * }
 */

function problem6(forms) {
  var answer = [];
  let dict = {};

  for(let list of forms) {
    for(let i = 0; i < list[1].length - 1; i++){
      dict[list[1].substring(i, i + 2)] === undefined ? 
      dict[list[1].substring(i, i + 2)] = 0 
      : dict[list[1].substring(i, i + 2)] += 1;
    }
  }

  for(let list of forms) {
    for(let i = 0; i < list[1].length - 1; i++){
      if(dict[list[1].substring(i, i + 2)] >= 2){
        answer.push(list[0]);
      }
    }
  }

  answer = [...new Set(answer)].sort();

  return answer;
}

module.exports = problem6;