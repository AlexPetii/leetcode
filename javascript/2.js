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

const l1 = arrayToList([9,9,9,9,9,9,9]);
const l2 = arrayToList([9,9,9,9]);

//main
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let result = dummy;
  let total,
    carry = 0;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    let number = total % 10;
    carry = Math.floor(total / 10);
    dummy.next = new ListNode(number);
    dummy = dummy.next;
  }
  return result.next;
};
//
function listToArray(list) {
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

console.log(listToArray(addTwoNumbers(l1, l2)));
