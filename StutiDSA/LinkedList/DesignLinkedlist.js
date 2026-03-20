var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
        if (!temp) return -1; 
        temp = temp.next;
    }

    return temp ? temp.val : -1; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = { val: val, next: null };
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = { val: val, next: null };

    if (this.head === null) {
        this.head = newNode; 
        this.size++;
        return;
    }

    let temp = this.head;
    while (temp.next !== null) {
        temp = temp.next;
    }

    temp.next = newNode; 
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return;
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    const newNode = { val: val, next: null };
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;


};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
    }
    temp.next = temp.next.next;
    this.size--;

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */