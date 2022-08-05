export class Node<T> {
  constructor(public element: T, public next: Node<T> | null = null) {}
}

export class LinkedList<T> {
  private length = 0;
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  constructor(value: T | null = null) {
    if (value !== null) {
      this.head = new Node(value);
      this.length++;
    }
    this.tail = this.head;
  }

  private initList = (node: Node<T> | null) => {
    this.head = node;
    this.tail = node;
    this.length++;
    return this;
  };

  append = (element: T) => {
    const node = new Node(element);

    if (this.head === null) {
      return this.initList(node);
    }

    // O(n)
    // let current = this.head;
    // while (current.next) {
    //   current = current.next;
    // }
    // current.next = node;

    // O(1)
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  };

  prepend = (element: T) => {
    const node = new Node(element);

    if (this.head === null) {
      return this.initList(node);
    }

    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  };

  insert = (position: number, element: T) => {
    const node = new Node(element);
    let current = this.head;
    let counter = 0;

    if (position >= this.length) {
      this.append(element);
      return this;
    }

    if (position === 0) {
      this.prepend(element);
      return this;
    }

    while (counter++ !== position - 1) {
      current = current.next;
    }

    const holdingPointer = current.next;
    current.next = node;
    node.next = holdingPointer;
    this.length++;
  };

  removeAt = (position: number) => {
    if (position < 0 || position > this.length) return null;

    if (!this.head) return null;

    let current: Node<T> | null = this.head;

    if (position === 0) {
      this.head = current?.next;
    } else {
      let counter = 0;

      while (counter++ !== position - 1) {
        current = current.next;
      }

      current.next = current.next?.next || null;
    }

    this.length--;
    return current?.element;
  };

  remove = (element: T) => {};

  indexOf = (element: T) => {};

  isEmpty = () => {};

  size = () => this.length;

  toString = () => {};

  print = () => {
    const elements = [];
    let current = this.head;

    while (current && current.element !== null) {
      elements.push(current.element);
      current = current.next;
    }

    return elements;
  };
}
