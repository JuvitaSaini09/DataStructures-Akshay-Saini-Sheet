var removeNthFromEnd1 = function (head, n) {
    let length = 0;
    let current = head;
    if (head === null) return null;
    while (current != null) {
        length++;
        current = current.next;
    }
    if (length === n) return head.next;
    let distanceToTravel = length - n;
    let prev = null;
    let temp = head;
    while (distanceToTravel > 0) {
        prev = temp;
        temp = temp.next;
        distanceToTravel--;
    }

    prev.next = temp.next;
    return head;

}



var removeNthFromEnd = function (head, n) {
    if (head === null) return null;
    let slow = head;
    let fast = head;
    let gap = n;
    while (gap > 0) {
        fast = fast.next
        gap--;
    }

    if(fast === null) return head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next
    }

    slow.next = slow.next.next;
    return head;
}