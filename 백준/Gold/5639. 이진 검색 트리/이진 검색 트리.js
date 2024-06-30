const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let inputs = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const preorder = inputs.map(Number); // [50,30,24,5,28,45,98,52,60]

/* BST = (M,L,R) */
function BST(key) {
  this.root = key;
  this.left = null;
  this.right = null;
}

function buildTree(preorder, start, end) {
  const rootIdx = start;
  const root = new BST(preorder[rootIdx]);

  if (start > end) {
    return null;
  }

  let splitIdx = start + 1;
  while (preorder[splitIdx] < preorder[rootIdx] && splitIdx <= end) {
    splitIdx++;
  }

  root.left = buildTree(preorder, rootIdx + 1, splitIdx - 1);
  root.right = buildTree(preorder, splitIdx, end);

  return root;
}

const START = 0;
const END = preorder.length - 1;
const tree = buildTree(preorder, START, END);

function postOrder(tree) {
  if (tree.left) {
    postOrder(tree.left);
  }
  if (tree.right) {
    postOrder(tree.right);
  }

  console.log(tree.root);
}

postOrder(tree);
