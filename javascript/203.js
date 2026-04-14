class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeElements(head, val) {
  const dummy = new ListNode(null, head);
  let curr = head;
  let prev = dummy;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
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

function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// tests
console.assert(
  JSON.stringify(
    listToArray(removeElements(arrayToList([1, 2, 6, 3, 4, 5, 6]), 6))
  ) === JSON.stringify([1, 2, 3, 4, 5]),
  "Error in test 1"
);

console.assert(
  JSON.stringify(listToArray(removeElements(arrayToList([7, 7, 7, 7]), 7))) ===
    JSON.stringify([]),
  "Error in test 2"
);

console.assert(
  JSON.stringify(
    listToArray(removeElements(arrayToList([1, 2, 3, 4, 5]), 10))
  ) === JSON.stringify([1, 2, 3, 4, 5]),
  "Error in test 3"
);

console.assert(
  JSON.stringify(listToArray(removeElements(arrayToList([]), 1))) ===
    JSON.stringify([]),
  "Error in test 4"
);

console.log("All tests passed!");
