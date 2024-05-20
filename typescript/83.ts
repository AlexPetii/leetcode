class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
    let tmp = head;
    while (tmp && tmp.next) {
        if (tmp.val === tmp.next.val) {
            tmp.next = tmp.next?.next
        } else {
            tmp = tmp.next
        }
    }
    return head
};