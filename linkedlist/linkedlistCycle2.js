//linked list has a cycle without using hash map we use floyed cycle algorithm
//approach said if cycle exist slow pointer meets fast pointer at certain time.
let hascycle = function (head) {
  //corner case; 
  if (head == null) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == null || fast.next == null) {
      return false;
    }
  }
  return true;
};
