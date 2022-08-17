import { Node } from './LinkedList';

// FIFO
export class LinkedQueue<T> {
  private length = 0;
  private first: Node<T> = null;
  private last: Node<T> = null;

  peek() {
    return this.last;
  }

  enqueue(value: T) {
    const nodeToEqueue = new Node(value);

    if (this.length === 0) {
      this.first = nodeToEqueue;
      this.last = nodeToEqueue;
    } else {
      this.last.next = nodeToEqueue;
      this.last = nodeToEqueue;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.last = null;
    }

    this.first = this.first;
    this.length--;
    return this;
  }

  isEmpty = () => this.length === 0;
}

const myStack = new LinkedQueue();

myStack.enqueue('Google');
myStack.enqueue('Udemy');
myStack.enqueue('Discord');
console.log(myStack.dequeue());
