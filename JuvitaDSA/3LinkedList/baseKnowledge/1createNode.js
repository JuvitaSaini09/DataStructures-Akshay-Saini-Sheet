class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}



const head = new Node(5);
head.next = new Node(6);
head.next.next = new Node(2);
head.next.next.next = new Node(40);

let temp = head;

while (temp != null) {
    // console.log("--->",temp.data)
    process.stdout.write(temp.data + " ");
    temp = temp.next;
}