class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.bottom = newNode;
        this.length = 1;
    }

    PushMethod(value) {
        const newNode = new Node(value);
        if(!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.bottom.next = newNode;
            this.bottom = newNode;
        }
        this.length++;
        return this
    }
    
    pop() {
        let temp;
        if(!this.top) {
            throw new Error(`Stack Is Empty`);
        } else if(this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            temp = this.top;
            let prev = this.top;
            while(temp.next) {
                prev = temp;
                temp = temp.next;
            }
            this.bottom = prev;
            this.bottom.next = null;
        }
        this.length--;
        return temp ? temp : true;
    }
}

const NewStack = new Stack(1);
console.log(NewStack);