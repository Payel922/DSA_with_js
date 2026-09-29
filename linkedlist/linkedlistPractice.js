class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
function MylinkedList (){
    this.size = 0;
    this.head = null;
}



MylinkedList.prototype.addAtHead = function(val){
let newNode = new Node(val);
newNode.next = this.head;
this.head = newNode;
this.size++;

}

let list = new MylinkedList();
list.addAtHead(30);
console.log(list);
