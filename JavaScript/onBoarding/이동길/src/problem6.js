function problem6(forms) {
  check(forms);
  return getEmailByDuplicatedNickName(forms);
}

module.exports = problem6;

function getEmailByDuplicatedNickName(forms) {
  const nickNames = forms.map((data) => data[1]);
  const compareStringList = getCheckedStringList(nickNames);
  const compareStringListObject = getCompareStringListObject(
    compareStringList,
    forms
  );
  const duplicateEmail = new Set();

  Object.values(compareStringListObject).forEach(({ count, emailList }) => {
    if (count > 1) {
      emailList.forEach((email) => {
        duplicateEmail.add(email);
      });
    }
  });

  return [...duplicateEmail].sort();
}

function getCheckedStringList(nickNames) {
  const stringList = new Set();
  nickNames.forEach((nickname) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      stringList.add(nickname.substr(i, i + 2));
    }
  });
  return stringList;
}

function getCompareStringListObject(compareStringList, forms) {
  const compareStringListObject = {};

  compareStringList.forEach(
    (compareString) =>
      (compareStringListObject[compareString] = { count: 0, emailList: [] })
  );

  compareStringList.forEach((comapreString) => {
    forms.forEach(([email, nickName]) => {
      if (nickName.includes(comapreString)) {
        compareStringListObject[comapreString].count++;
        compareStringListObject[comapreString].emailList.push(email);
      }
    });
  });
  return compareStringListObject;
}
function check(forms) {
  checkEmail(forms);
  checkFormsLength(forms);
  checkNickName(forms);
}
function checkFormsLength(forms) {
  if (forms.length < 1 || forms.length > 10000) {
    throw new Error('크루의 수가 잘못되었습니다!');
  }
}
function checkEmail(forms) {
  let regex = new RegExp('[a-z0-9]+@email.com');
  forms.forEach(([email]) => {
    if (!regex.test(email)) throw new Error('이메일 형식이 아닙니다!');
  });
  regex.test();
}
function checkNickName(forms) {
  forms.forEach(([_, nickName]) => {
    const regex = /^[가-힣]+$/;
    if (nickName.length >= 20 || nickName.length < 1)
      throw new Error('닉네임은 1자 이상 20자 미만이어야합니다.');
    if (!regex.test(nickName)) throw new Error('닉네임은 한글이어야 합니다!');
  });
}
