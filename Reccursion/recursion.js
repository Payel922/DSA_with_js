//if a function call itself is called recursions
//two parts of recursions Basecase,recursive case
//base case- stop conditions
//recursive case - the function call itself part

//first easy example of recursion
function fun(num) {
  if (num == 0) return; //base case should be written in top
  console.log(num);
  num = num - 1;
  fun(num);
}
// fun(5);

function sum(num) {
  if (num == 0) {
    return 0;
  }
  return num + sum(num - 1);
}
console.log(sum(5));

// sum of numbers in an array
let arr = [1, 3, 4];
function sumOfArray(n) {
  if (n == 0) {
    return arr[0];
  }
  return arr[n] + sumOfArray(n - 1);
}
console.log(sumOfArray(arr.length - 1));
