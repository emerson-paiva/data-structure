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

  append = (element: T) => {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
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
      this.head = node;
      this.tail = node;
      this.length++;

      return this;
    }

    const currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
    this.length++;

    return this;
  };

  insert = (position: number, element: T) => {};

  removeAt = (position: number) => {
    if (position < 0 || position > this.length) return null;

    if (!this.head) return null;

    let current: Node<T> | null = this.head;

    if (position === 0) {
      this.head = current?.next;
    } else {
      let previous = null;
      let index = 0;

      while (index++ < position) {
        previous = current;
        current = current ? current.next : null;
      }

      if (previous) {
        previous.next = current?.next || null;
      }
    }

    this.length--;
    return current?.element;
  };

  remove = (element: T) => {};

  indexOf = (element: T) => {};

  isEmpty = () => {};

  size = () => this.length;

  toString = () => {};

  print = () => {};
}
