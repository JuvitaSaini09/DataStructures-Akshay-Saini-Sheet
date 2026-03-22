var getIntersectionNode = function (headA, headB) {

    let first = headA;
    let second = headB;

    while (first !== second) {
        first = (first === null) ? headB : first.next;
        second = (second === null) ? headA : second.next;
    }

    return first;
};

/*
node → node → node → null → switch
A+B+c+c
B+A+c+c
*/