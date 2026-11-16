//rotate the linkedlist to the k places
//if k equals to the length rotate list equals to original list

var rotatNode = function (head, k) {
  if (!head || !head.next) return head;

  //calculate length
  let length = 0;
  let curr = head;
  while(curr){
    curr = curr.next;
    length++;
  }
  //to avoid unnessary rotations

  k = k % length;

  let s = head; //poiter

  let f = head; //pointer

  //for moving the f pointer to the k step ahead;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  //reaching the end of the list

  while (f.next) {
    s = s.next;
    f = f.next;
  }
  f.next = head;
  let newHead = s.next;
  s.next = null;
  return newHead;
};
