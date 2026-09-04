//find the consequitive one
let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1];
function countOne(arr) {
  let currentCount = 0;
  let maximumCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentCount++;
    } else {
      currentCount = 0;
    }
    if (currentCount > maximumCount) {
      maximumCount = currentCount;
    }
  }
  return maximumCount;
}
console.log(countOne(arr));
