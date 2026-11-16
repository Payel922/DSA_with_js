//whenever there is delete node sentinial node will come to the picture

function NodeList(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
//two pass solution as we traverse the linked list 2 times

var removeNthFromEnd = function (head, n) {
  let sentinal = new NodeList();
  sentinal.next = head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  let prevpos = length - n;
  let prev = sentinal;

  for (let i = 0; i < prevpos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.nex;
  return sentinal.next;
};

//one pass solutions another appproaches

function removeNthFromEnds(head, n) {
  //add sentinel node at the start
  let sentinal = new NodeList();
  sentinal.next = head;

  //move my first pointer ahead by n
  let first = sentinal;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  //move both pointer until first pointer reaches the last node
  let second = sentinal;
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  //just delete the second.next

  second.next = second.next.next;
  return sentinal.next;
}
