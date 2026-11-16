let arr = ["study", "student", "stu"];

var longestCommonPrefix = function (arr) {
  let condition = true;
  let x = 0;

  while (x < arr[0].length) {
    let ch = arr[0][x];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][x] != ch || x === arr[i].length) {
        return arr[0].substring(0, x);
      }
    }
    ++x;
  }
  return arr[0];
};

console.log(longestCommonPrefix(arr));
