
class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

function printLL(head) {
    if (head === null) return;
    process.stdout.write(head.data.toString());
    if (head.next !== null) {
        process.stdout.write("->");
    }
    printLL(head.next)
}


const head = new Node(5);
head.next = new Node(6);
head.next.next = new Node(2);
head.next.next.next = new Node(40);


printLL(head)

//:::::::::
function printLinkedList(head) {
    if (head === null) return;
    console.log(head.data)
    printLinkedList(head.next)

}