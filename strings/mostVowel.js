var maxFreqSum = function (s) {
  //store all the values with frequency in a map
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  //find th emax vowel and consonent inside the map
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonent = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      maxVowel = Math.max(maxVowel, map[s[i]]);
    } else {
      maxConsonent = Math.max(maxConsonent, map[s[i]]);
    }
  }
  return maxConsonent + maxVowel;
};
