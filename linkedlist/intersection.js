//brute force (not good at all )  - take one element and check in other linked list that it is exist or not
var hasIntersection = function (headA, headB) {
  //using set take 0(1) for fetching the data
  
  //put all nodes of headB inside a set;
  let currentB = headB;
  let item = new Set();
  while (currentB) {
    item.add(currentB);
    currentB = currentB.next;
  }
  //check for each element of headA if they present in set 
  let currentA = headA;
  while (currentA) {
    if (item.has(currentA)) {
      return currentA;
    }
    currentA = currentA.next;
  }
  return null;
