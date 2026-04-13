/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return null;
    while (head !== null && head.val === val) {
        head = head.next;
    }
    // [1,2,6,3,4,5,6]
    let currenthead = head;
    let prev = null;
    while (currenthead !== null) {
        if (currenthead.val === val) {
            prev.next = currenthead.next;
            currenthead.next = null;
        } else {
            prev = currenthead;
        }

        currenthead = prev.next;
    }
    return head;
};