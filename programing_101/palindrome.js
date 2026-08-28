//given an integer x , return true if x is a palindrome and false otherwise.
function palindrome(number) {
  let reverse = 0;
  while (number > 0) {
    let remainder = number % 10;
    reverse = 10 * reverse + remainder;
    number = Math.floor(number / 10);
  }
  if (number == reverse) {
    return true;
  } else {
    return false;
  }
  if (number < 0) {
    return false;
  }
}
console.log(palindrome(-123));
