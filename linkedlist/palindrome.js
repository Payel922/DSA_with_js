//approach one convert linked list to array and compare
function palindrome(head) {
  let arr = [];
  let current = head;
  //convert to an array 
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  // finding half and checking both sides if it is equal;
  let n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

//approach two
var hasPalindrome = function (head) {
  //finding the middle element
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //reverse the second half
  let prev = null;
  let current = slow;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  //checking the palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.value != secondList.value) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};
