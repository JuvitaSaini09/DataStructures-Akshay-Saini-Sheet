/*
this solution I wrote in 25 minutes

*/

var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let prevTail = null;
    let first = head;
    let second = head.next;
    let newhead = second;

    while (first && second) {
        first.next = second.next;
        second.next = first;
        if (prevTail !== null) {
            prevTail.next = second;
        }
        prevTail = first;
        first = first.next;
        second = first ? first.next : null;
    }

    return newhead;
}

/*
suggest by chatgpt
*/

var swapPairs = function (head) {
    let dummy = { next: head };
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        // swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // move prev forward
        prev = first;
    }

    return dummy.next;
};