/*
 You are given the head of a singly linked list. Return an array containing the values of the nodes.

 Output: [1, 2, 3, 4, 5]
Explanation: The linked list contains 5 elements [1, 2, 3, 4, 5]. The elements are printed in a single line.

*/

/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}

/**
 * @param {Node} head
 */
class Solution {
    printList(head) {
        if(head===null) return; 
        let result=[];
        while(head!==null){
            result.push(head.data);
            head=head.next;
        }
        return result
    }
}