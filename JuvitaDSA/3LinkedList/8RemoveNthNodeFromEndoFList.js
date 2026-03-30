// first solution two pass 

// find length to to travel=x=L-n then
// travel x steps and delete the node ( use prev and curr pointer)

var removeNthFromEnd = function (head, n) {
    let length = 0;
    let current = head;
    if (head === null) return null;
    while (current != null) {
        length++;
        current = current.next;
    }
    if (length === n) return head.next;
    let distanceToTravel = length - n;
    let prev = null;
    let temp = head;
    while (distanceToTravel > 0) {
        prev = temp;
        temp = temp.next;
        distanceToTravel--;
    }

    prev.next = temp.next;
    return head;

}


var removeNthFromEnd = function (head, n) {
    if (!head) return null;
    let current = head;
    let length = 0;
    while (current !== null) {
        current = current.next;
        length++;
    }
    if (length === n) return head.next

    let lengthToTravel = length - n;
    current = head;
    let prev = null;
    while (lengthToTravel > 0) {
        prev = current;
        current = current.next;
        lengthToTravel--;
    }

    prev.next = current.next;
    return head;
};

// second solution one pass 