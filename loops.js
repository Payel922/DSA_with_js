/* loops mean to repeat the code as many as you want . Loops means doing things over and over again */
for (let i = 1; i < 4; i++) {
  console.log("hello world ");
}
//going through the arrayn
let arr = [0, 1, 2, 32, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//find out which is odd

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

//while looop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
