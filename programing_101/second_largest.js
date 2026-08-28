//find the second largest in an array ...
let arr = [4, 6];
function secondLargest(arr) {
  if (arr.length == 0) {
    return "the array should have some element";
  }
  if (arr.length <2) {
    return null;
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest(arr));

/* always think about corner case like 
-array is empty 
-array has negative number 
-array has only one element 
-array has dublicate */ 

