var reverseList = function (head) {
    if (this.head === null) return null;

    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};