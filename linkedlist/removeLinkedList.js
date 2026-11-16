function listNode (val,next){
    this.val = (val === undefined ? 0: val);
    this.next = (next ===undefined ? null : next)

}





//sentinal node - dummy nodes that added front of the head 
//it helps us to delete nodes for starting index 
var removeElements = function (head,val){
let sentinel = new listNode();
sentinel.next = head;
let prev = setinel;
while(prev && prev.next){
    if(prev.next .val ===val){
        prev.next = prev.next.next;
    }else{
           prev = prev.next;
    }
    
}
return sentinel.next;

}