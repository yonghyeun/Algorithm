const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

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
    this.length = 0;
  }

  push(newNode) {
    const node = newNode instanceof Node ? newNode : new Node(newNode);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
  }

  pushLeft(newNode) {
    const node = newNode instanceof Node ? newNode : new Node(newNode);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Deque is empty');
    }
    const returnNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    return returnNode.value;
  }

  popLeft() {
    if (this.length === 0) {
      throw new Error('Deque is empty');
    }
    const returnNode = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length -= 1;
    return returnNode.value;
  }

  rotate(steps, direction) {
    if (this.length <= 1) return;
    if (direction === 1) {
      while (steps--) {
        this.push(this.popLeft());
      }
    } else {
      while (steps--) {
        this.pushLeft(this.pop());
      }
    }
  }
}

function solution() {
  const dequeue = new Dequeue();
  for (let i = 1; i <= N; i++) {
    dequeue.push(i);
  }
  const result = [];
  let flag = 1;
  let cnt = 0;
  
  while (dequeue.length !== 0) {
    if (cnt === M) {
      flag *= -1;
      cnt = 0;
    }
    dequeue.rotate(K - 1, flag);
    result.push(flag === 1 ? dequeue.popLeft() : dequeue.pop());
    cnt += 1;
  }
  
  console.log(result.join('\n'));
}

solution();