var validPalindrome = function (s) {
  //filtered value
  s = s.toLowerCase();
  let fileterdString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      fileterdString = fileterdString + s[i];
      rev = s[i] + rev;
    }
  }

  return rev === fileterdString;
};

//another approach
var validPalindrome2 = function (s) {
  //without extra space
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      ++i;
    } else if (!s[j].match(/[0-9a-z]/i)) {
      --j;
    } else if (s[i] == s[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }
  return true;
};

console.log(validPalindrome2("A man , A plan,a canal: Panama"));
