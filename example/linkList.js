class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
 }

 const n1 = new Node(100)

 class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // insert first node 
  insertFirst(node){
    this.head = new Node(node, this.head)
    this.size++;
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data)
    let current;

    // if empty , make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // insert at index
  insertAt(data, index){
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data)
      return;
    }

    const node = new Node(data);
    let current, previous;
    
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++

  }

  // get index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data)
      }
      count++;
      current = current.next;
    }
    
    return null;
  }

  //remove at index
  remove(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let prev;
    let count = 0;

    if(index == 0) {
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }

    this.size--

  }

  //clear all List elements

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListData(){
    let current = this.head;
    while (current) {
      console.log(current.data)
      current = current.next;
    }
  }
 }

 const ll = new LinkedList()

 ll.insertFirst(100)
 ll.insertFirst(200)
 ll.insertFirst(300)
 ll.insertLast(400)
 ll.insertAt(500,2)
 ll.remove(3)

 console.log(ll)

// ll.getAt(2)
//  ll.printListData()