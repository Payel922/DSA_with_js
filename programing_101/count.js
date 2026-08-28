//write a function that returns the cont of digits in a a number.

function countNumber(number) {
  let n = Math.abs(number);
  if (n == 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count = count + 1;
  }
  return count;
}
console.log(countNumber(234));
