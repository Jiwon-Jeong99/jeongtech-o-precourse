function problem7(user, friends, visitors) {
  var answer = {};
  const comp = (a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }
    else if (a[1] > b[1]) {
      return -1;
    }
    else {
      if(a[0] > b[0]) return 1;
      else if(a[0] < b[0]) return -1;
    }
    return 0;
  }

  let relation = new Map();

  for(let [A, B] of friends){
    if(A === B) continue;

    if(!relation.has(A)) relation.set(A, [B]);
    else relation.set(A, [...relation.get(A), B]);

    if(!relation.has(B)) relation.set(B, [A]);
    else relation.set(B, [...relation.get(B), A]);

    answer[A] = 0;
    answer[B] = 0;
  }

  for(let friend of relation.get(user)){
    for(let candidate of relation.get(friend)){
      if(candidate === user) continue;

      answer[candidate] += 10;
    }
  }

  for(let visitor of visitors) {
    if(relation.get(user).includes(visitor)) continue;

    if(answer[visitor] === undefined) answer[visitor] = 1;
    else answer[visitor] += 1;
  }


  return Object.entries(answer)
    .sort(comp)
    .filter(([key, value]) => value != 0)
    .map(([key, value]) => key);
}

module.exports = problem7;

// "mrko"

// [ 
//   ["donut", "andole"],
//   ["donut", "jun"],
//   ["donut", "mrko"],
//   ["shakevan", "andole"],
//   ["shakevan", "jun"],
//   ["shakevan", "mrko"]
// ]

// ["bedi", "bedi", "donut", "bedi", "shakevan"]	

// ["andole", "jun", "bedi"]

//          donut shakevan andole jun mkro 
/**
 * donut    0              1      1   1
 * shakevan       0        1      1   1
 * andole   1     1        0 
 * jun      1     1               0
 * mkro     1     1                   0
 */