//merge two linked list according to the order

var mergeTwoLists = function(l1, l2){
   let dummyNode = new Node()
   let curr = null;

   //corner case ;
   if(!l1)return l2;
   if(!l2) return l1;

   //starting validation to check the start position
   
    if(l1.val < l2.val){
        curr = l1
        l1 = l1.next;
    }else{
        curr = l2;
        l2 = l2.next;
    }
    let start = curr;

    while(l1 && l2){
        if(l1.val<l2.val){
            curr.next = l1;
           l1 = l1.next;
        }else {
             curr.next = l2;
           l2 = l2.next; 
        
        }
        curr = curr.next;
    }
    if(!l1){
        curr.next = l2
    }
    if(!l2){
        curr.next = l1;
    }
   return start;
}