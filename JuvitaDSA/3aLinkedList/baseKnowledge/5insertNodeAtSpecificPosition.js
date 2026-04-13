class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertPos (head, pos, val) {

    if (pos < 1) return head;

    let NewNode = new Node(val);

    if (pos === 1) {
        NewNode.next = head;
        head = NewNode;
        return head;
    }

    let temp = head;

    for (let i = 1; i < pos - 1 && temp != null; i++) {
        temp = temp.next;
    }

    if (temp === null) {
        return head
    }
    NewNode.next = temp.next;
    temp.next = NewNode;
    return head;
}


// function printList(head) {
//     let curr = head;
//     while (curr !== null) {
//         process.stdout.write(curr.data.toString());
//         if (curr.next !== null) {
//             process.stdout.write(" -> ");
//         }
//         curr = curr.next;
//     }
//     console.log();
// }


// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(4);
// printList(head);
// let val = 3, pos = 3;
// console.log("insert",val,"At",pos)
// head = insertPos(head, pos, val);
// printList(head);