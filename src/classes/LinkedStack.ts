import { Node } from './LinkedList';

// LIFO
export class LinkedStack<T> {
  private length = 0;
  private top: Node<T> = null;

  peek() {
    return this.top;
  }

  push(element: T) {
    const newNode = new Node(element);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      const holdingPointer = this.top;

      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    const holdingPointer = this.top;

    this.top = this.top.next;
    this.length--;

    return holdingPointer;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new LinkedStack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack.pop());
