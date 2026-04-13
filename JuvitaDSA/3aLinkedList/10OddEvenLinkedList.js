var oddEvenList = function (head) {
    if (!head || !head.next || !head.next.next) return head;

    let odd = head;
    let even = head.next;
    let evenhead=even;

    while(even && even.next){
      odd.next=even.next;
      odd=odd.next;

      even.next=odd.next;
      even=even.next
    }

   odd.next = evenhead;

    return head;
};