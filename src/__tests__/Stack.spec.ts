import { Stack } from '../Stack';

describe('Stack', () => {
  it('should init Stack with items and return with peek()', () => {
    const stack = new Stack([10]);

    expect(stack.peek()).toBe(10);
  });

  it('should add item to Stack', () => {
    const stack = new Stack([10]);

    stack.push(50);

    expect(stack.peek()).not.toBe(10);
    expect(stack.peek()).toBe(50);
  });

  it('should delete and return last item at Stack', () => {
    const stack = new Stack([10, 50]);

    const deleteItem = stack.pop();

    expect(deleteItem).toBe(50);
    expect(stack.peek()).toBe(10);
  });

  it('should return true when stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });

  it('should return false when stack is not empty', () => {
    const stack = new Stack([10]);

    expect(stack.isEmpty()).toBe(false);
  });

  it('should return size of the Stack', () => {
    const stack = new Stack([10, 20, 30]);

    expect(stack.size()).toBe(3);
  });

  it('should clear the Stack', () => {
    const stack = new Stack([10, 20, 30]);

    expect(stack.size()).toBe(3);

    stack.clear();

    expect(stack.size()).toBe(0);
  });
});
