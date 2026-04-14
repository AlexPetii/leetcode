var reverseList = function(head) {
    let prev = null
    let current = head
    if(!head) return null
    while(current){
        let tmp = current.next;
        current.next = prev
        prev = current
        current = tmp
    }
    return prev
};