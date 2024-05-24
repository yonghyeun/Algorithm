const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [N, K, M] = fs.readFileSync(filePath).toString().split(' ').map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  connect(prevNode, nextNode) {
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  enqueue(node) {
    if (!(node instanceof Node)) {
      node = new Node(node);
    }
    if (this.head === null) {
      this.head = node;
      this.tail = node; // 어차피 head 가 비었으면 tail도 비었음
    } else {
      this.connect(node, this.head);
      this.head = node;
    }
  }

  dequeue() {
    if (this.head === null) {
      throw new Error('dequeue 가 이미 비었슈');
    }
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    return returnValue;
  }

  push(node) {
    if (!(node instanceof Node)) {
      node = new Node(node);
    }
    if (this.tail === null) {
      this.tail = node;
      this.head = node;
    }
    this.connect(this.tail, node);
    this.tail = node;
  }

  pop() {
    if (this.tail === null) {
      throw new Error('dequeue 가 비었슈');
    }
    const returnValue = this.tail.value;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return returnValue;
  }
}

/* 요세푸스 문제 */
function solution() {
  let person = Array.from({ length: N }, (_, idx) => idx + 1);
  const arr = new Dequeue();
  for (let value)
}

solution();
