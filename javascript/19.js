function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

const head = arrayToList([1, 2, 3, 4, 5]);
const n = 2;

var removeNthFromEnd = function (head, n) {
  if (!head || !head.next) return null;
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

function listToArray(list) {
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}
console.log(listToArray(removeNthFromEnd(head, n)));
