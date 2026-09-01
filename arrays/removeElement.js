//remove element that is given in the questions
let arr = [2, 4, 4, 4, 4, 5, 6];
function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x + 1;
}
console.log(removeElement(arr, 4));
