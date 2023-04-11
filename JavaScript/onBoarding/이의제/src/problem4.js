function problem4(word) {
  var answer = "";

  for(let i = 0; i < word.length; i++){
    if('a' <= word[i] && word[i] <= 'z'){
      answer += String.fromCharCode('a'.charCodeAt(0) + 'z'.charCodeAt(0) - word[i].charCodeAt(0));
    }
    else if('A' <= word[i] && word[i] <= 'Z') {
      answer += String.fromCharCode('A'.charCodeAt(0) + 'Z'.charCodeAt(0) - word[i].charCodeAt(0));
    }
    else {
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;