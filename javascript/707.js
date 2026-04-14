var Node = function (val, next = null) {
    this.Value = val
    this.Next = next
}

var MyLinkedList = function () {
    this.Head = null
    this.Size = 0
};

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.Size) {
        return -1
    }
    let current = this.Head
    for (let i = 0; i < index; i++) {
        current = current.Next
    }
    return current.Value;
};

MyLinkedList.prototype.addAtHead = function (val) {
    this.addAtIndex(0, val)
};

MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.Size, val)
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.Size) {
        return
    }

    this.Size++

    if (index == 0) {
        this.Head = new Node(val, this.Head);
        return
    }

    let current = this.Head

    for (let i = 0; i < index - 1; i++) {
        current = current.Next
    }
    let old_next = current.Next
    current.Next = new Node(val, old_next)
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.Size) {
        return
    }
    if (index == 0) {
        this.Head = this.Head.Next
    } else {
        let current = this.Head;
        for (let i = 0; i < index - 1; i++) {
            current = current.Next
        }
        current.Next = current.Next.Next
    }
    this.Size--
};