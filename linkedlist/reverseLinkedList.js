function reverseLinkedList(head){
let prev = null;
let current = head;
while(current){
    let temp = current.next;
    current.next = prev;
    // now move
    prev = current;
    current = temp.next;

}
head = prev;
return prev;

}