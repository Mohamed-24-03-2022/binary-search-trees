import mergeSort from './mergeSort.js';
import checkDuplicated from './checkDuplicated.js';

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}

const buildTree = (arr, start = 0, end = arr.length - 1) => {
  if (start > end) return null;
  const mid = parseInt((start + end) / 2);
  const node = new Node(arr[mid]);
  node.left = buildTree(arr, start, mid - 1);
  node.right = buildTree(arr, mid + 1, end);
  return node;
};

// sorting and removing the duplicated values
const myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const settingTheArray = (arr) => {
  const sortedArr = mergeSort(arr);
  const finalArr = checkDuplicated(sortedArr);
  return finalArr;
};

// building the tree
const finalArr = settingTheArray(myArray);
const newTree = new Tree(finalArr);
// console.log(newTree);

// visualizing the tree in the console
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
// prettyPrint(newTree.root);

// finding on the tree recursively
const find = (root, key) => {
  if (root === null || root.data === key) {
    return root;
  }

  if (root.data < key) {
    return find(root.right, key);
  }

  if (root.data > key) {
    return find(root.left, key);
  }
};
// console.log(find(newTree.root, 67));

// inserting values on the tree (only on leaf node)
const insert = (root, key) => {
  if (root === null) {
    root = new Node(key);
    return root;
  }

  if (root.data < key) {
    root.right = insert(root.right, key);
  }

  if (root.data > key) {
    root.left = insert(root.left, key);
  }

  return root;
};
// insert(newTree.root, 63405);

// removing a value from the tree
const removeNode = (root, key) => {
  if (root === null) {
    return root;
  }

  if (root.data < key) {
    root.right = removeNode(root.right, key);
  } else if (root.data > key) {
    root.left = removeNode(root.left, key);
  } else {
    if (root.right === null) {
      return root.left;
    } else if (root.left === null) {
      return root.right;
    }

    root.data = minValue(root.right);
    root.right = removeNode(root.right, root.data);
  }

  return root;
};
const minValue = (root) => {
  let minv = root.data;
  while (root.left != null) {
    minv = root.left.data;
    root = root.left;
  }
  return minv;
};
// removeNode(newTree.root, 67);

// traversing the tree in breadth-first level order
const levelOrder = (root, fun = null) => {
  if (root === null) return root;
  const q = [];
  const results = [];
  q.push(root);
  while (q.length) {
    const node = q[0];
    q.shift();
    results.push(node.data);
    if (fun !== null) fun(node.data);
    if (node.left !== null) q.push(node.left);
    if (node.right !== null) q.push(node.right);
  }

  return fun ? null : results;
};
// console.log(levelOrder(newTree.root));

// traversing the tree in depth-first in inOrder
const inOrder = (root, results = [], fun = null) => {
  if (root === null) return root;
  if (fun !== null) fun(root.data);

  inOrder(root.left, results);
  results.push(root.data);
  inOrder(root.right, results);

  return fun ? null : results;
};
// console.log(inOrder(newTree.root));

// traversing the tree in depth-first in preOrder
const preOrder = (root, results = [], fun = null) => {
  if (root === null) return root;
  if (fun !== null) fun(root.data);

  results.push(root.data);
  preOrder(root.left, results);
  preOrder(root.right, results);

  return fun ? null : results;
};
// console.log(preOrder(newTree.root));

// traversing the tree in depth-first in postOrder
const postOrder = (root, results = [], fun = null) => {
  if (root === null) return root;
  if (fun !== null) fun(root.data);

  postOrder(root.left, results);
  postOrder(root.right, results);
  results.push(root.data);

  return fun ? null : results;
};
// console.log(postOrder(newTree.root));

// finding tree heights and node height
let height = 0;
const helperGetMaxHeight = (root, node) => {
  if (root === null) return 0;
  let leftHeight = helperGetMaxHeight(root.left, node);
  let rightHeight = helperGetMaxHeight(root.right, node);
  let maxHeight = Math.max(leftHeight, rightHeight) + 1;
  if (root.data === node) {
    height = maxHeight;
  }
  return maxHeight;
};
const getHeight = (root, node) => {
  helperGetMaxHeight(root, node);
  return height;
};
// console.log(helperGetMaxHeight(newTree.root));
// console.log(getHeight(newTree.root, 8));

// finding node depth
const getDepth = (root, node, depth = 0) => {
  if (root === null) return 0;
  if (root.data === node) return depth;

  depth++;
  if (root.data > node) {
    return getDepth(root.left, node, depth);
  }
  if (root.data < node) {
    return getDepth(root.right, node, depth);
  }
};
// console.log(getDepth(newTree.root, 3));

// Checking if the tree is balanced
const isBalanced = (root) => {
  const primallyCheck = (root) => {
    if (root === null) return 0;

    // checking left subtree
    let leftSubtreeHeight = primallyCheck(root.left);
    // if left subtree is not balanced then the entire tree is also not balanced
    if (leftSubtreeHeight === -1) return -1;

    //checking right subtree
    let rightSubtreeHeight = primallyCheck(root.right);
    // if right subtree is not balanced then the entire tree is also not balanced
    if (rightSubtreeHeight === -1) return -1;

    //checking the difference of left and right subtree for current node
    if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) {
      return -1;
    }
    //if it is balanced then return the height
    return leftSubtreeHeight + rightSubtreeHeight + 1;
  };
  if (primallyCheck(root) === -1) return false;
  else return true;
};
// console.log(isBalanced(newTree.root));

// rebalancing the tree
const rebalancing = (unbalancedTreeRoot) => {
  const treeArr = levelOrder(unbalancedTreeRoot);
  const newArr = settingTheArray(treeArr);
  const balancedTree = new Tree(newArr);
  return balancedTree;
};
// console.log(rebalancing(newTree.root));

//!--------------------------- tieing it all together -----------------------------
const createRandomArray = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    arr.push(randomNum);
  }
  return arr;
};
const buildRandomBST = () => {
  const randomArr = createRandomArray(15);
  const newArr = settingTheArray(randomArr);
  const balancedTree = new Tree(newArr);
  return balancedTree;
};

const myRandomBST = buildRandomBST();

// checking if balanced
console.log(isBalanced(myRandomBST.root));

// Print out all elements in level, pre, post, and in order
console.log(levelOrder(myRandomBST.root));
console.log(preOrder(myRandomBST.root));
console.log(postOrder(myRandomBST.root));
console.log(inOrder(myRandomBST.root));

// Unbalance the tree by adding several numbers > 100
insert(myRandomBST.root, 111);
insert(myRandomBST.root, 200);
insert(myRandomBST.root, 300);
insert(myRandomBST.root, 400);
insert(myRandomBST.root, 500);

// visualizing the BST
prettyPrint(myRandomBST.root);

// checking if balanced again
console.log(isBalanced(myRandomBST.root));

// Balancing the tree
const rebalancedTree = rebalancing(myRandomBST.root);

// visualizing the BST
prettyPrint(rebalancedTree.root);

// checking if balanced once again
console.log(isBalanced(rebalancedTree.root));

// Print out all elements in level, pre, post, and in order
console.log(levelOrder(rebalancedTree.root));
console.log(preOrder(rebalancedTree.root));
console.log(postOrder(rebalancedTree.root));
console.log(inOrder(rebalancedTree.root));