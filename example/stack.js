class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop(element) {
    this.items.pop(element);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

stack.push("松下問童子");
stack.push("言師採藥去");
stack.push("只在此山中");
stack.push("雲深不知處");
stack.pop();
console.log(stack);
