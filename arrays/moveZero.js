let arr = [0, 1, 0, 3, 12];
function moveZero(arr) {
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[pointer] = arr[i];
      pointer++;
    }
  }
  for (let i = pointer; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
console.log(moveZero(arr));
