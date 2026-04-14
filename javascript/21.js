var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let curr = dummy

    let p1 = list1
    let p2 = list2 

    while(p1 && p2 ){
        if(p1.val < p2.val){
            curr.next = p1
            p1 = p1.next
        }else {
            curr.next = p2
            p2 = p2.next
        }
        curr = curr.next
    }
    if(p1){
        curr.next = p1
    }else curr.next = p2

    return dummy.next
};