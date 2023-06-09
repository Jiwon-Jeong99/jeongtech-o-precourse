const problem1 = require('../src/problem1');
const problem2 = require('../src/problem2');
const problem3 = require('../src/problem3');
const problem4 = require('../src/problem4');
const problem5 = require('../src/problem5');
const problem6 = require('../src/problem6');
const problem7 = require('../src/problem7');

describe('problem1', () => {
  test('case1', () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });

  test('case2', () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });

  test('case3 : 숫자가 연속적인가?', () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });

  test('case4 : 길이가 2인가', () => {
    expect(problem1([99, 102, 103], [211, 212])).toEqual(-1);
  });

  test('case5 : 시작면이나 마지막면이 나왔는가', () => {
    expect(problem1([1, 2], [211, 212])).toEqual(-1);
  });

  test('case6 : 1~400페이지인가?', () => {
    expect(problem1([1, 2], [404, 405])).toEqual(-1);
  });
});

describe('problem2', () => {
  test('case1', () => {
    expect(problem2('browoanoommnaon')).toEqual('brown');
  });
  test('case2', () => {
    expect(problem2('zyelleyz')).toEqual('');
  });

  test('case3 : 알파벳이며, 소문자인가', () => {
    try {
      problem2('zYelleyz');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  test('case4 : 알파벳이며, 소문자인가', () => {
    try {
      problem2('z223elleyz');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  test('case5 : 알파벳이며, 소문자인가', () => {
    try {
      problem2('z!!@#3elleyz');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  test('case6 : 길이가 1이상인가?', () => {
    try {
      problem2('');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  test('case7 : 길이가 1000이하인가?', () => {
    try {
      problem2('abc'.repeat(1000));
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});

describe('problem3', () => {
  test('case1', () => {
    expect(problem3(13)).toEqual(4);
  });
  test('case2', () => {
    expect(problem3(33)).toEqual(14);
  });
  test('case3 : 1000이하의 수인가?', () => {
    try {
      problem3(1001);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case3 : 1이상의 수인가?', () => {
    try {
      problem3(0);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case4 : 1이상의 수인가?', () => {
    try {
      problem3(-1000);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case5 : 수인가?', () => {
    try {
      problem3('테스트');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});

describe('problem4', () => {
  test('case1', () => {
    expect(problem4('I love you')).toEqual('R olev blf');
  });
  test('case2 : 빈 문자열인 경우', () => {
    try {
      problem4('');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case3 : 1000 이상의 문자열인 경우', () => {
    try {
      problem4('a'.repeat(1000));
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});

describe('problem5', () => {
  test('case1', () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test('case2', () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
  test('case3 : 돈이 0 인경우', () => {
    try {
      problem5(0);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case4 : 돈이 소수 인경우', () => {
    try {
      problem5(5000.125);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});

describe('problem6', () => {
  test('case1', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
      ])
    ).toEqual(['jason@email.com', 'jm@email.com', 'mj@email.com']);
  });
  test('case2 : 크루인원수 오류', () => {
    try {
      problem6([]);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case3 : 이메일 형식이 아닌 경우', () => {
    try {
      problem6([['dl@e.com', '하이루']]);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case4 :닉네임이 한글이 아닌경우', () => {
    try {
      problem6([['dl@email.com', 'ddd']]);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  test('case5 :닉네임이 20자 이상인경우', () => {
    try {
      problem6([
        ['dl@email.com', '테스트테스트테스트테스트테스트테스트테스트'],
      ]);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});

describe('problem7', () => {
  test('case1', () => {
    expect(
      problem7(
        'mrko',
        [
          ['donut', 'andole'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
      )
    ).toEqual(['andole', 'jun', 'bedi']);
  });
});
