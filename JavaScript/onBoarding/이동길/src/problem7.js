function problem7(user, friends, visitors) {
  const answer = [];
  const friendsListObject = getFriendsListObject(friends);
  const youMayKnow = getYouMayKnowPeople(user, friendsListObject);
  const scoreObject = getFriendsScoreObject(youMayKnow, visitors);

  deleteAlreadyFriend(scoreObject, friendsListObject, user).forEach(
    ([person, _]) => {
      if (answer.length < 5) answer.push(person);
    }
  );
  return answer;
}

function getFriendsListObject(friends) {
  const friendsListObject = {};
  friends.forEach((people) => {
    people.forEach((person) => {
      if (friendsListObject[person] === undefined) {
        friendsListObject[person] = new Set();
      }
    });
  });

  friends.forEach(([person1, person2]) => {
    friendsListObject[person1].add(person2);
    friendsListObject[person2].add(person1);
  });

  return friendsListObject;
}

function getYouMayKnowPeople(user, friendsListObject) {
  const youMayKnow = new Set();
  [...friendsListObject[user]].map((friend) => {
    friendsListObject[friend].forEach((person) => {
      if (person != user) youMayKnow.add(person);
    });
  });
  return [...youMayKnow];
}

function getFriendsScoreObject(youMayKnow, visitors) {
  const scoreObject = {};
  youMayKnow.forEach((person) => {
    scoreObject[person] = 10;
  });

  visitors.forEach((person) => {
    if (scoreObject[person] === undefined) {
      scoreObject[person] = 0;
    }
    scoreObject[person] += 1;
  });
  return scoreObject;
}

function getSortedArray(scoreObject) {
  return Object.entries(scoreObject)
    .sort((a, b) => b[1] - a[1])
    .sort((a, b) => b[0] - a[0]);
}

function deleteAlreadyFriend(scoreObject, friendsListObject, user) {
  friendsListObject[user].forEach((friend) => {
    if (scoreObject[friend]) delete scoreObject[friend];
  });
  return getSortedArray(scoreObject);
}
module.exports = problem7;
