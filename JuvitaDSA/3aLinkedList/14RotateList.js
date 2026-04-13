

/* I sol

*/
var rotateRight = function (head, k) {

    if (!head || !head.next) return head;

    let length = 0;
    let current = head;

    while (current) {
        current = current.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    let prev = null;
    current = head;

    for (let i = 0; i < length - k; i++) {
        prev = current;
        current = current.next;
    }

    prev.next = null;
    let newHead = current;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = head;
    return newHead;


};