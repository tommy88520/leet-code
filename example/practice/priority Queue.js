class Node {
  constructor(value, p) {
    this.value = value;
    this.priority = p;
  }
}

class Priority {
  constructor() {
    this.values = [];
  }

  enqueue(value, p) {
    let newNode = new Node(value, p);

    if (this.values.length == 0) {
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);

    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
    ) {
      //swap

      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;

      // update index number

      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      let removedNode = this.values.pop();
      return removedNode;
    }

    // swap two nodes
    let temp = this.values.pop();
    this.values.push(this.values[0]);
    this.values[0] = temp;
    let removedNode = this.values.pop();

    this.maxHeapify(0);

    return removedNode;
  }

  maxHeapify(i) {
    let largest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    if (
      l <= this.values.length - 1 &&
      this.values[l].priority > this.values[i].priority
    ) {
      largest = l;
    } else {
      largest = i;
    }

    if (
      r <= this.values.length - 1 &&
      this.values[r].priority > this.values[largest].priority
    ) {
      largest = r;
    }

    if (largest != i) {
      // swap
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}

let pq = new Priority();
pq.enqueue("Eat", 5);
pq.enqueue("Learn Java", 2);
pq.enqueue("Learn JavaScript", 3);
pq.enqueue("Learn Python", 7);
pq.enqueue("Learn mongodb", 10);
pq.dequeue();
pq.dequeue();

// let task = pq.dequeue();
// console.log(task);

while (pq.values.length >= 1) {
  console.log(pq.dequeue().value);
}
