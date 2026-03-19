class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteNode(head, pos) {
    // Case 1: Empty list
    if (head === null) return null;

    // Case 2: Delete head
    if (pos === 0) {
        return head.next;
    }

    let curr = head;

    // Traverse to (pos - 1)
    for (let i = 0; i < pos - 1 && curr.next !== null; i++) {
        curr = curr.next;
    }

    if (curr.next !== null) {
        curr.next = curr.next.next;
    }

    return head;
}