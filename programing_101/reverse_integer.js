function reverseInteger(n) {
  let ncopy = n;
  n = Math.abs(n);
  let reverse = 0;
  while (n > 0) {
    let remainder = n % 10;
    reverse = 10 * reverse + remainder;
    n = Math.floor(n / 10);
  }
  if (ncopy < 0) {
    return -reverse;
  } else {
    return reverse;
  }
}
console.log(reverseInteger(-123));
