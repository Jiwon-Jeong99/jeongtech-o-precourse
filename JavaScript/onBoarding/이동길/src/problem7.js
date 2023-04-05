function problem7(user, friends, visitors) {
  var answer;
  const friendsListObject = getFriendsListObject(friends);
  const youMayKnow = getYouMayKnowPeople(user, friendsListObject);
  console.log(youMayKnow);
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

module.exports = problem7;
