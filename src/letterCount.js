export const getLetterCount = (myString) => {
  const letters = myString.split("");
  let letterCount = {};
  letters.forEach((word) => {
    if (word in letterCount) letterCount[word]++;
    else letterCount[word] = 1;
  });
  return letterCount;
};
