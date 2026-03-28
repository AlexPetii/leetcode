var isPalindrome = function (head) {
    var middle = function (head) {
        let fast = head
        let slow = head
        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
    var reverse = function (head) {
        let prev = null
        let current = head
        if (!head) return null
        while (current) {
            let tmp = current.next;
            current.next = prev
            prev = current
            current = tmp
        }
        return prev
    };
    let first = head
    let mid = middle(head)
    let second = reverse(mid)
    while(first && second){
        if(first.val != second.val) return false
        first = first.next
        second = second.next
    }
    return true
}
