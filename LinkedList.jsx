const verifyIndex = (index, length, head) => {
    if (!head) return ["Our Linked List Is Empty", "Error"];
    if (index <= 0) return ["Index Must Be GreaterThan or Equal To 1", "Error"];
    if (index > length) return [`Index Must Be LessThan or Equal To ${length}`, "Error"];
    return -1;
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    pushMethod(value) {
        const NewNode = new Node(value);
        if (!this.head) {
            this.head = NewNode;
            this.tail = NewNode;
        } else {
            this.tail.next = NewNode;
            this.tail = NewNode;
        }
        this.length++;
        return this;
    }

    unShift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++;
        return this
    }

    shift() {
        if (!this.head) throw new Error(`Linked List Is Empty`);
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
    }

    pop() {
        if (!this.head) throw new Error(`Our Linked List Is Empty`);
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            let prev = this.head;
            while (temp.next) {
                prev = temp;
                temp = temp.next;
            }
            this.tail = prev;
            this.tail.next = null;
        }
        this.length--;
    }

    getMethod(index = 0) {
        const isError = verifyIndex(index, this.length, this.head);
        if (isError[1] === `Error`) {
            throw new Error(`${isError[0]}`);
        } else {
            if (!this.head) throw new Error(`Our Linked List Is Empty`);
            if (index <= 0) throw new Error(`Index Must Be GreaterThan or Equal To 1`);
            if (index > this.length) throw new Error(`Index Must Be LessThan or Equal To ${this.length}`);

            let temp = this.head;
            for (let i = 1; i < index; i++) {
                temp = temp.next;
            }
            return temp;
        }
    }

    setMethod(index, value = `Please Provide Some Value`) {
        const isError = verifyIndex(index, this.length, this.head.value);
        if (isError[1] === "Error") {
            throw new Error(`${isError[0]}`);
        } else {
            const getNode = this.getMethod(index);
            if (getNode) {
                getNode.value = value;
                return getNode;
            } else {
                return -1;
            }
        }
    }

    insertMethod(index, value = `Please Sent Some Value Via Argument`) {
        const isError = verifyIndex(index, this.length + 1, this.head.value);
        if (isError[1] === `Error`) {
            throw new Error(`${isError[0]}`);
        } else if (index === 1) {
            return this.unShift(value);
        } else if (index === this.length + 1) {
            return this.pushMethod(value);
        } else {
            const getPrevious = this.getMethod(index - 1);
            const getNext = getPrevious.next;
            const newNode = new Node(value);
            getPrevious.next = newNode;
            newNode.next = getNext;
            this.length++;
            return this;
        }
    }

    removeMethod(index = 0) {
        const isError = verifyIndex(index, this.length, this.head.value);
        if (isError[1] === `Error`) {
            throw new Error(`${isError[0]}`);
        } else if (index === 1) {
            return this.shift();
        } else if (index === this.length) {
            return this.pop();
        } else {
            const getPrevious = this.getMethod(index - 1);
            const getNext = getPrevious.next;
            getPrevious.next = getNext.next;
            this.length--;
            return this;
        }
    }

}


const firstNode = new LinkedList(1);
firstNode.pushMethod(2)
firstNode.pushMethod(3)
firstNode.pushMethod(4)
firstNode.pushMethod(5)
// firstNode.pushMethod(1);
//firstNode.pop();
// firstNode.unShift(-1);
//firstNode.shift();
//firstNode.getMethod(3);
//firstNode.setMethod(3, -10);
//firstNode.insertMethod(4, 100);
console.log(firstNode);