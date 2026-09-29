/*linked list - It is linear data structure . Nodes are linked together by a reference field 
two types of linked list - singly linkedlist and doubly linked list. */

//design a linked list

//representation of node
function Node(val) {
  this.val = val;
  this.next = null;
}

//representation of linked list as a whole.
function MylinkedList() {
  this.head = null;
  this.size = 0;
}

//create new node
let newNode = new Node(30);

//add a node in the head
MylinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

//add node at the tail
MylinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head == newNode;
  } else {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

//add by the index(number); add it before the index
MylinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  //corner case;
  if (index < 0 || index > this.size) return;

  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
  } else {
    //reach a index
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  this.size++;
};

MylinkedList.prototype.get = function (index) {
  let current = this.head;

  //corner case
  if (index < 0 || index >= this.size) return -1;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};
MylinkedList.prototype.delete = function (index) {
  //corner case
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  }
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
};

// Usage:
let list = new MylinkedList();
list.addAtHead(30);
list.addAtTail(40);
list.addAtIndex(1, 35);

console.log(list.get(0)); // 30
console.log(list.get(1)); // 35
console.log(list.get(2)); // 40
