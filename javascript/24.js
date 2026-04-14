var swapPairs = function (head) {
    if (!head) return head
    let dummy = new ListNode(0, head)
    let curr = dummy
    while (curr.next && curr.next.next) {
        let first = curr.next
        let second = curr.next.next

        first.next = second.next
        second.next = first
        curr.next = second

        curr = first
    } return dummy.next
};