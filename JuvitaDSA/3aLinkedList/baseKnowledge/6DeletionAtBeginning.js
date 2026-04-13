class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class GfG {

    static deleteHead(head) {
        if(head===null) return
        head=head.next;
        return head;
    }

    // Delete the head node and return the new head
    // static deleteHead(head) {

    //     // Check if the list is empty
    //     if (head === null)
    //         return null;

    //     // Move the head pointer to the next node
    //     let temp = head;
    //     head = head.next;

    //     // Free the memory of the old head node (not needed in JS, GC handles it)
    //     temp = null;

    //     return head;
    // }

    // Function to print the linked list
    
    
    static printList(curr) {
        while (curr !== null) {
            process.stdout.write(curr.data.toString());
            if (curr.next !== null) {
                process.stdout.write(" -> ");
            }
            curr = curr.next;
        }
        console.log();
    }
}

// Driver code
// Create a hard-coded linked list:
// 8 -> 2 -> 3 -> 1 -> 7
let head = new Node(8);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(7);

head = GfG.deleteHead(head);
GfG.printList(head);