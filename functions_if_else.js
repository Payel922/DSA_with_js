//how to write functions
function greetings(name) {
  console.log("hii how are you " + name);
}
//arrow functions
let greetings2 = () => {
  console.log("hii how are you");
};

//function with return value
let sum = function (a, b) {
  return a + b;
};
//functions call to get the results
console.log(sum(2, 3));
greetings("payel");
greetings2();

//write a function which acccepts the age and tells whether a person is eligible to vote or not
function vote(age) {
  if (age >= 18) {
    console.log("you are eligible to vote ");
  } else {
    console.log("you are not eligible to vote ");
  }
}
vote(18);


//whether a number is odd or even
function checkOddOrEven(number) {
  if (number % 2 == 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}
checkOddOrEven(9);
