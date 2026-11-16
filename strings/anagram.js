let s = "anagram";
let t = "nagaram";

//using in built function

var anagram = function (s, t) {
  let charS = s.split("").sort().join("");
  let charT = t.split("").sort().join("");
  if (charS == charT) return true;
  return false;
};

//without using the inbuilt function
var anagram2 = function (s, t) {
  if (s.length != t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) {
      return false;
    } else {
      --map[t[i]];
    }
  }
  return true;
};
console.log(anagram2(s, t));

//time complexity is o(n) and space is 0(1) because we use english alphabet that is only 26 letters and we use map;
