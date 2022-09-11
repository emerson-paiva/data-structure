import { BinarySearchTree, Node } from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  // it('should be able insert values to tree', () => {
  //   const tree = new BinarySearchTree<number>();

  //   expect(tree.lookup(5)).toBe('Empty Tree');

  //   tree.insert(10);
  //   tree.insert(15);
  //   tree.insert(5);

  //   const nodeToCompare = new Node(5);

  //   expect(tree.lookup(5)).toMatchObject(nodeToCompare);
  // });

  it('should return `Empty Tree` on lookup empty tree`', () => {
    const tree = new BinarySearchTree<number>();

    expect(tree.lookup(5)).toBe('Empty Tree');
  });

  it('should return `Node not found` on loopup do not find the value', () => {
    const tree = new BinarySearchTree<number>();

    tree.insert(10);
    tree.insert(15);

    expect(tree.lookup(5)).toBe('Node not found');
  });

  it('should be able to lookup node by value', () => {
    const tree = new BinarySearchTree<number>();

    tree.insert(10);
    tree.insert(15);
    tree.insert(5);

    const nodeToCompare = new Node(5);

    expect(tree.lookup(5)).toMatchObject(nodeToCompare);
  });
});
