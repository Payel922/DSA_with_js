// star patttarn

// i is responsible for row and j is responsible for column
for (i = 0; i < 4; i++) {
  let row = "";
  for (j = 0; j < 4; j++) {
    row = row + "*";
  }
  console.log(row);
}

//second questions
console.log("second questions");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

//third question
console.log("third questions");
for (let i = 1; i <= 5; i++) {
  let msg = "";
  for (let j = 1; j <= i; j++) {
    msg = msg + j;
  }
  console.log(msg);
}
//forth questions
console.log("forth questions ");

for (let i = 1; i <= 5; i++) {
  let msg = "";
  for (let j = 1; j <= i; j++) {
    msg = msg + i;
  }
  console.log(msg);
}

//fifth questions
console.log("fifth questions");
for (let i = 0; i < 5; i++) {
  let msg = "";
  for (let j = 1; j <= 5 - i; j++) {
    msg = msg + j;
  }
  console.log(msg);
}

//sixth question
console.log("sixth questions");
for (let i = 0; i < 5; i++) {
  let msg = "";
  for (let j = 0; j < 5 - i; j++) {
    msg = msg + "*";
  }
  console.log(msg);
}
// 7th questions
console.log("seventh questions");
for (let i = 0; i < 5; i++) {
  let row = " ";
  for (let j = 0; j < 5 - (i + 1); j++) {
    row = row + " ";
  }
  for (k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

//8th questions
console.log("8th questions");
for (let i = 0; i < 6; i++) {
  let row = " ";
  let switc = 1;
  for (j = 0; j < i + 1; j++) {
    row = row + switc;
    if (switc == 1) {
      switc = 0;
    } else {
      switc = 1;
    }
  }
  console.log(row);
}

//9th questions
console.log("9th questions");
let switc = 1;
for (let i = 0; i < 6; i++) {
  let row = " ";

  for (j = 0; j < i + 1; j++) {
    row = row + switc;
    if (switc == 1) {
      switc = 0;
    } else {
      switc = 1;
    }
  }
  console.log(row);
}
