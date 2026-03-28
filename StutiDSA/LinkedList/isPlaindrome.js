
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

    }
    let prev = null;
    while (slow != null) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    let left = head;
    let right = prev;
    while (right) {
        if (left.val != right.val) {
            return false;
        }
        left = left.next;
        right = right.next;


    }
    return true;


};
