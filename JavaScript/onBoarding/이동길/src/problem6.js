function problem6(forms) {
  return getEmailByDuplicatedNickName(forms);
}

module.exports = problem6;

function getEmailByDuplicatedNickName(forms) {
  const nickNames = forms.map((data) => data[1]);
  const compareStringList = getCheckedStringList(nickNames);
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
