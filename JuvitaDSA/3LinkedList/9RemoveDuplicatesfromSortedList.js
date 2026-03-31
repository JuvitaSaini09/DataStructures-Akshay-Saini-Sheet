

// my code what I wrote in forst go

var deleteDuplicates = function (head) {
    if (head === null || head.next === null) return head;

    let prev = head;
    let current = head.next;

    while (current != null) {
        if (prev.val === current.val) {
            prev.next = current.next;
            current = prev.next
        }
        else {
            prev = current
            current = current.next
        }
    }

    return head;

};

// chat gpt suggest more cleaner way
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) return head;
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next;
        }
    }
    return head;
}