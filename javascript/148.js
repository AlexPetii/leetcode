function ListNode(val) {
  this.val = val;
  this.next = null;
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

const head = arrayToList([4, 2, 1, 3]);

console.log("Start: ", listToArray(head));

function merge(l1, l2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
  }
  if (l1) {
    tail.next = l1;
  }
  if (l2) {
    tail.next = l2;
  }
  return dummy.next;
}

var sortList = function (head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = slow.next;
  slow.next = null;

  let l1 = sortList(head);
  let l2 = sortList(mid);

  return merge(l1, l2);
};

function listToArray(list) {
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

console.log("Result:", listToArray(sortList(head)));
