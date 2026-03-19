function removeLastNode(head) {
    // If the list is empty, return null
    if (head === null) {
        return null;
    }

    if (head.next === null) {
        return null;
    }

    // Find the second last node
    let secondLast = head;
    while (secondLast.next.next !== null) {
        secondLast = secondLast.next;
    }

    // Delete the last node by disconnecting it
    secondLast.next = null;

    return head;
}