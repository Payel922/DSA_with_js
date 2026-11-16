//return the indexes of the character given
var findingWordsContaining = function (words, x) {
  let count = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      count.push(i);
    }
  }
  return count;
};
let words = ["abc", "bcd", "aaa", "cbc"];
console.log(findingWordsContaining(words, "a"));
