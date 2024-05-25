class Queue {
    constructor(value) {
      this.root = [];
      this.length = 0
    }

    push(value = 0) {
       if(!this.root) {
          this.root = [];
          this.root.push(value);
       } else {
          this.root.push(value);
       }
       this.length++;
       return this;
    }

    shift() {
        if(!this.root || this.length === 0) throw new Error(`Stack Is Empty`);
        this.root.pop();
        this.length--;
        return this;
    }
}

const node = new Queue();
console.log(node);