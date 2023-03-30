function problem2(cryptogram) {
  let crypto = cryptogram;
  let newCrypto = removeDuplicateString(crypto);

  while (newCrypto !== crypto) {
    if (crypto === "") return crypto;
    crypto = newCrypto;
    newCrypto = removeDuplicateString(crypto);
  }
  return crypto;
}

function removeDuplicateString(cryptogram) {
  const stringStack = [];
  for (let i in cryptogram) {
    const curStr = cryptogram[i];
    if (curStr === stringStack[stringStack.length - 1]) {
      stringStack.pop();
    } else {
      stringStack.push(curStr);
    }
  }
  return stringStack.join("");
}

module.exports = problem2;
