let arr = [2, 3, 4, 5];
function sumOfOdd(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) return isOdd ? arr[n] : 0;
  return (isOdd ? arr[n] : 0) + sumOfOdd(n - 1);
}
console.log(sumOfOdd(arr.length - 1));
