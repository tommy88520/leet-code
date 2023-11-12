class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.path = "";
    this.queue = [];
  }

  insert(z) {
    let y = null;
    let x = this.root;

    while (x !== null) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    if (y == null) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
  }

  searchRecursively(x, key) {
    if (x == null || key == x.key) {
      return x;
    } else if (key < x.key) {
      return this.searchRecursively(x.left, key);
    } else {
      return this.searchRecursively(x.right, key);
    }
  }

  searchIteratively(x, key) {
    while (x != null && key != x.key) {
      if (key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    if (x == null) {
      console.log("Node not found");
    } else {
      console.log("Node found");
    }

    return x;
  }

  preOrder(n) {
    if (n != null) {
      this.path += n.key + " ";
      this.preOrder(n.left);
      this.preOrder(n.right);
    }
  }

  inOrder(n) {
    if (n != null) {
      this.inOrder(n.left);
      this.path += n.key + " ";
      this.inOrder(n.right);
    }
  }

  postOrder(n) {
    if (n != null) {
      this.postOrder(n.left);
      this.postOrder(n.right);
      this.path += n.key + " ";
    }
  }

  bftt(n) {
    if (n != null) {
      this.queue.push(n);
      for (let i = 0; i < this.queue.length; i++) {
        let currentNode = this.queue[i];
        if (currentNode != null) {
          if (currentNode.left != null) {
            this.queue.push(currentNode.left);
          }

          if (currentNode.right != null) {
            this.queue.push(currentNode.right);
          }
        }
      }
    }
  }
}

let BST = new BinarySearchTree();

BST.insert(new Node(15));
BST.insert(new Node(6));
BST.insert(new Node(5));
BST.insert(new Node(1));
BST.insert(new Node(13));
BST.insert(new Node(-7));
BST.insert(new Node(3));

// BST.bftt(BST.root);
let result = BST.searchRecursively(BST.root, 2);

// console.log(BST.queue);

console.log(result);
