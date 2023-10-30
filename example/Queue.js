class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const cars = new Queue();

cars.enqueue("Honda");
// cars.enqueue("toyota");
// cars.enqueue("Mazda");

console.log(cars.isEmpty());
