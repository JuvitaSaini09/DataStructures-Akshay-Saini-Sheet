var middleNode = function (head) {
  // we use 2 pointers fast and slow
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
