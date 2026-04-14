var deleteDuplicates = function(head) {
    if(!head) return null
    let first = head
    let second = head.next
    while(second){
        if(first.val == second.val){
            first.next = second.next
            second = second.next
        }else{
            first = first.next
            second = second.next
        }
    }
    return head
};