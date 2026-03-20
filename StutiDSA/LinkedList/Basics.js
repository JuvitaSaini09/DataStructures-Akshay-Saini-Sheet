class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  let head = new Node(10);
  head.next = new Node(20);
  head.next.next = new Node(30);
  head.next.next.next = new Node(40);
  
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  }

//   Traversal of Singly Linked List (Iterative Approach)

// Step-by-Step Algorithm:

// We will initialize a temporary pointer to the head node of the singly linked list.
// After that, we will check if that pointer is null or not null, if it is null, then return.
// While the pointer is not null, we will access and print the data of the current node, then we move the pointer to next node.