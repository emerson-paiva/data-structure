interface IBinarySearchTree<T> {
  insert(value: T): void;
  lookup(value: T): void;
  remove(value: T): void;
}

export class Node<T> {
  public left: Node<T> | null = null;
  public right: Node<T> | null = null;

  constructor(public value: T) {}
}

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
  private root: Node<T> | null = null;

  constructor() {}

  insert(value: T) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value: T) {
    if (!this.root) {
      return 'Empty Tree';
    }

    let currentNode: Node<T> | null = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }

    return 'Node not found';
  }

  remove(value: T): void {
    throw new Error('Method not implemented.');
  }
}
