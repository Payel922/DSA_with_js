//there are two ways of doing linked list cycle one is using hashtable and floyed algorithm
//at the end of linked list linkedlist.next must point to null

let hascycle = function (head) {
  let seenNode = new Set();
  let current = head;
  while (current != null) {
    if (seenNode.has(current)) {
      return true;
    }
    seenNode.add(current);
    current = current.next;
  }
  return false;
};

//unlike like set which store single value map store in key value pair

const colllection = new Map();
console.log(colllection);
colllection.set("name", "payel");
console.log(colllection);
const obj = {
  name: "payel",
};
console.log(colllection.get("name"));
console.log(typeof obj);
console.log(colllection.size);
