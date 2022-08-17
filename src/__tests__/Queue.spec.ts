import { Queue } from '../Queue';

describe('Queue', () => {
  it('should init Queue', () => {
    const queue = new Queue(['John', 'Doe']);

    expect(queue.front()).toBe('John');
  });

  it('should be able to add new items to queue', () => {
    const queue = new Queue(['John']);

    expect(queue.size()).toBe(1);

    queue.enqueue('Doe');

    expect(queue.size()).toBe(2);
  });

  it('should return and remove first item from queue', () => {
    const queue = new Queue(['John', 'Doe']);

    expect(queue.size()).toBe(2);
    expect(queue.front()).toBe('John');

    const firstItem = queue.dequeue();

    expect(queue.size()).toBe(1);
    expect(queue.front()).toBe('Doe');
    expect(firstItem).toBe('John');
  });

  it('should be able to see the first item', () => {
    const queue = new Queue(['John', 'Doe']);

    expect(queue.front()).toBe('John');
  });

  it('should return true on isEmpty when size = 0', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);
  });

  it('should return queue size', () => {
    const queue = new Queue(['John', 'Doe']);

    expect(queue.size()).toBe(2);
  });

  it('should print queue', () => {
    const queue = new Queue(['John', 'Doe']);

    expect(queue.print()).toBe('John,Doe');
  });
});
