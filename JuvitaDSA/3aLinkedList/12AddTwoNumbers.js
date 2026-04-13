
var addTwoNumbers = function (l1, l2) {

    let carry = 0;
    let dummy = new ListNode();
    let current = dummy;

    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum = sum + l1.val
            l1 = l1.next;
        }
        if (l2) {
            sum = sum + l2.val
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    // if (carry > 0) {
    //      current.next=new ListNode(carry)
    // }

    return dummy.next;
};