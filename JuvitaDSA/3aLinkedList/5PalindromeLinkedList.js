/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null) return null
    if (head.next === null) return true;

    let slow = head;
    let fast = head;
    let stack = [];
    while (fast !== null && fast.next !== null) {
        stack.push(slow.val);
        fast = fast.next.next;
        slow = slow.next;
    }

    if (fast !== null) {
        slow = slow.next;
    }

    while (slow != null) {
        let poppedNodeVal = stack.pop();
        if (poppedNodeVal !== slow.val) return false;
        slow = slow.next;

    }

    if (stack.length === 0) return true
    else return false;

};