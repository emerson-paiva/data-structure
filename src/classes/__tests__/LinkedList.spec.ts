import { LinkedList } from '../LinkedList';

describe('LinkedList', () => {
  it('should init LinkedList with items and return size()', () => {
    const linkedList = new LinkedList(10);

    expect(linkedList.size()).toBe(1);
  });

  it('should append an item at empty LinkedList', () => {
    const linkedList = new LinkedList();

    expect(linkedList.size()).toBe(0);

    linkedList.append('My new item');

    expect(linkedList.size()).toBe(1);
  });

  it('should prepend an item at the head of LinkedList', () => {
    const linkedList = new LinkedList(50);

    expect(linkedList.size()).toBe(1);
    expect(linkedList.print()).toStrictEqual([50]);

    linkedList.prepend(10);

    expect(linkedList.size()).toBe(2);
    expect(linkedList.print()).toStrictEqual([10, 50]);
  });

  it('should insert element at position', () => {
    const linkedList = new LinkedList(50);

    expect(linkedList.size()).toBe(1);
    expect(linkedList.print()).toStrictEqual([50]);

    linkedList.append(10);
    linkedList.append(123);
    linkedList.append(444);
    linkedList.insert(2, 66);

    expect(linkedList.size()).toBe(5);
    expect(linkedList.print()).toStrictEqual([50, 10, 66, 123, 444]);
  });
});
