class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var insertAtEnd = function (head, data) {
  let newNode = new Node(data);
  // if list empty
  if (head === null) {
    return newNode;
  }
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = newNode;
  return head;
};

var insertAtFront = function (head, data) {
  let newNode = new Node(data);
  newNode.next = head;
  head = newNode;
  return head;
};

var insertAtSpecificPosition = function (head, data, pos) {
  let newNode = new Node(data);
  if (pos === 1) {
    newNode.next = head;
    head = newNode;
    return head;
  }
  let temp = head;
  for (let i = 1; i < pos - 1 && temp != null; i++) {
    temp = temp.next;
  }
  if (temp === null) {
    return head;
  }
  newNode.next = temp.next;
  temp.next = newNode;
  return head;
};

// 1,2,4
// 1,2,3,4
// 2 tk chlega

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

head = insertAtFront(head, 1);

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

class Node {
  // constructor to initialize a new node with data
  constructor(newData) {
    this.data = newData;
    this.next = null;
  }
}
function traverseList(head) {
  while (head !== null) {
    process.stdout.write(head.data.toString());
    if (head.next !== null) {
      console.log();
      (" -> ");
    }
    head = head.next;
  }
  console.log();
}

function traverseRecursion(head) {
  if (head === null) return;

  console.log(head.data);
  traverseRecursion(head.next);
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

traverseList(head);

// Output:
// 10 -> 20 -> 30 -> 40

//  🔹 Traversal of Singly Linked List (Recursive Approach)
// You are given the head of a singly linked list.
// Return an array containing the values of the nodes.

function LinkedListToArray() {
  let result = [];
  let temp = head;
  while (temp !== null) {
    result.push(temp.data);
    temp = temp.next;
  }
  return result;
}
