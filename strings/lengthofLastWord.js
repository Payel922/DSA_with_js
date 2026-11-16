//there is different way of solving these one one is using inbuild functions
//the other is without using in build function

//using in built functions
var lengthOfLast = function (s) {
  s = s.trim(); //remove the extra space
  s = s.split(" "); //split whith space and return to an array;
  return s[s.length - 1].length;
};

//now using different approach
var lengthofLast1 = function (s) {
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      break;
    } else {
      --n;
    }
  }
  while (n >= 0) {
    if (s[n] == " ") {
      break;
    }
    count++;
    n--;
  }
  return count;
};
console.log(lengthofLast1("my name is Payel"));

//now using one loop;
function lenghtOflast2 (s){
    let n = s.length-1;
    let count = 0;
    while(n>0){
        if(s[n] != " "){
            ++count;
        }else if(count > 0) break;
        
        --n;
    }
}