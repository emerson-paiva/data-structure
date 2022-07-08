export class Queue<T> {
  constructor(private items: T[] = []) {}

  enqueue = (item: T) => this.items.push(item);

  dequeue = () => this.items.shift();

  front = () => this.items[0];

  isEmpty = () => this.items.length === 0;

  size = () => this.items.length;

  print = () => this.items.toString();
}
