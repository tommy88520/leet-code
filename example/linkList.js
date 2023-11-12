class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const n1 = new Node(100);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node == unshift
  insertFirst(node) {
    this.head = new Node(node, this.head);
    this.size++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.size === 1) {
      let temp = this.head;
      this.head = null;
      this.size = 0;
      return temp;
    } else {
      let current = this.head;

      for (let i = 1; i <= this.size - 2; i++) {
        current = current.next;
      }

      let temp = current.next;
      current.next = null;
      this.size--;
      return temp;
    }
  }

  shift() {
    if (!this.head) return null;

    if (this.size == 1) {
      let temp = this.head;
      this.head = null;
      this.size = 0;
      return temp;
    } else {
      // let pre = this.head;
      let current = this.head;

      while (current.next) {
        this.head = this.head.next;
      }
      this.size--;
      return current;
    }
  }

  unshift(value) {
    this.head = new Node(value, this.head);
    this.size++;

    // return this.head;
  }

  // insert last node
  insertLast(value) {
    let node = new Node(value);
    let current;

    // if empty , make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // insert at index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    let newNode = new Node(value);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index - 1) {
      // previous = current;
      count++;
      // console.log(count);
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    // previous.next = node;
    this.size++;
  }

  // get index
  getAt(index) {
    if (index < 0 || index > this.size - 1) {
      return;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  //remove at index
  remove(index) {
    if (index < 0 || index > this.size - 1) {
      return;
    }
    let current = this.head;
    let prev;
    let count = 0;

    if (index == 0) {
      this.head = current.next;
      // or
      // let result = this.shift();
      // return result
    } else {
      while (count < index - 1) {
        count++;
        // prev = current;
        current = current.next;
      }
      console.log(111, current.next.value);

      // prev.next = current.next;

      current.next = current.next.next;
    }

    this.size--;
  }

  //clear all List elements

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListvalue() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.unshift(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.unshift(400);
ll.unshift(1000);
// ll.pop();
ll.insertAt(500, 2);
// ll.remove(2);

// console.log(ll);

ll.getAt(3);
// console.log(ll.size);
// ll.printListvalue();
