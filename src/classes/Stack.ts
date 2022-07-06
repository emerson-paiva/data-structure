export class Stack<T> {
  private items: T[] = [];

  constructor(items: T[] = []) {
    this.items = items;
  }

  push = (item: T) => this.items.push(item);

  pop = () => this.items.pop();

  peek = () => this.items.at(-1);

  isEmpty = () => this.items.length === 0;

  size = () => this.items.length;

  clear = () => (this.items = []);

  print = () => console.log(this.items.toString());
}
