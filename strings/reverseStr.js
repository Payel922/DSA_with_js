var reverseStr = function (s, k) {
  //reverse the string;
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    //reverse the first k elements starting from x;
    let n = Math.min(k, s.length - x);
    let mid = Math.floor(n / 2);
    //now reversing the elements
    for (let i = 0; i < mid; i++) {
      let temp = s[i + x];
      s[i + x] = s[n - 1 - i + x];
      s[n - 1 - i + x] = temp;
    }
  }
  return s.join("");
};
let s = "hello";
console.log(reverseStr(s, 2));
