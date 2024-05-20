class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let res = new ListNode()
    let curr = res;
    while (list1 && list2) {
        if (list1.val >= list2.val) {
            curr.next = list2
            list2 = list2.next
        } else {
            curr.next = list1
            list1 = list1.next
        }
        curr = curr.next
    }
    if (list1 || list2) curr.next = list1 || list2
    return res.next
}