//practice loops and array

//q1. write a function that search for that targetElement in the array and return the index
//if the targetElement is not present then just return minus -1;

let array = ["payel", "suchi", "shamim", "rian"];
function searchElement(targetElement, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == targetElement) {
      return i;
    }
  }
  return -1;
}
console.log(searchElement("jhon", array));

//write a functions that returns the number of negative numbers in an array
let array2 = [-1, -63, -4, -6, -2, -9];
function countNegativeNumbers(arr) {
  let totalNegativeNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      totalNegativeNumber++;
    }
  }
  return totalNegativeNumber;
}
console.log(countNegativeNumbers(array2));

//write a function that returns the largest number in an array

function largestNumberInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNumberInArray(array2));
