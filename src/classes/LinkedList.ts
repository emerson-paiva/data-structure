export class Node<T> {
  constructor(public element: T, public next: Node<T> | null = null) {}
}

export class LinkedList<T> {
  private length = 0;
  private head: Node<T> | null = null;

  constructor() {}

  append = (element: T) => {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.length++;
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

  size = () => {};

  toString = () => {};

  print = () => {};
}
