//find out the Middle of a linked list 
//approach is that convert linked list to an array but it is not good 
//slow and fast pointer 
function node(val){
this.val = val;
this.next = null;
}
function MylinkedList (){
    this.head = null;
    this.size = 0;
}
MylinkedList.prototype.findMiddle = function(head){
    let slow = this.head;
    let fast = this.head;
    while(fast != null && fast.next !=null ){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
let list = new MylinkedList();
let newNode = new node(30);
list.head = newNode;
console.log(list);
