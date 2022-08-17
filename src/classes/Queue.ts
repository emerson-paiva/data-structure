export class Queue<T> {
  // change to LinkedList O(1)
  constructor(private items: T[] = []) {}

  enqueue = (item: T) => this.items.push(item);

  // this is O(n) - could be better
  dequeue = () => this.items.shift();

  front = () => this.items[0];

  isEmpty = () => this.items.length === 0;

  size = () => this.items.length;

  print = () => this.items.toString();
}
