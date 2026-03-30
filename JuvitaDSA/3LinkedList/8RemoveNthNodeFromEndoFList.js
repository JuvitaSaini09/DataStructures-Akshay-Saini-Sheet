// first solution two pass 

var removeNthFromEnd = function (head, n) {
    if (!head) return null;
    let current = head;
    let length = 0;
    while (current !== null) {
        current = current.next;
        length++;
    }
    if (length === n) return head.next

    let lengthToTravel = length - n;
    current = head;
    let prev = null;
    while (lengthToTravel > 0) {
        prev = current;
        current = current.next;
        lengthToTravel--;
    }

    prev.next = current.next;
    return head;
};

// second solution one pass 