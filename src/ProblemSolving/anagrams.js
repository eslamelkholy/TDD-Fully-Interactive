import { getLetterCount } from "./letterCount";

export const isAnagram = (str1, str2) => {
  var newStr1 = removeSpecialCharacters(str1);
  var newStr2 = removeSpecialCharacters(str2);
  const letterCount1 = getLetterCount(newStr1);
  const letterCount2 = getLetterCount(newStr2);
  return Object.entries(letterCount1).sort().toString() === Object.entries(letterCount2).sort().toString();
};

const removeSpecialCharacters = (str) => str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
