//sorted non decreasing order is that it can have duplicate and it is increasing order
// in place mean we have to change the exact array not change and create new array
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function removeDuplicate(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) { //first pointer
    if (arr[i] > arr[x]) {
      x = x + 1; // 2nd pointer use 
      arr[x] = arr[i];
    }
  }
  return x + 1;
}
console.log(removeDuplicate(arr));
console.log(arr);
