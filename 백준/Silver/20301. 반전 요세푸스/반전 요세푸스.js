const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [N, K, M] = fs.readFileSync(filePath).toString().split(' ').map(Number);

class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.pointer = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.pointer = new Node(null, this.head, this.tail);
    } else {
      [this.tail.next, node.prev] = [node, this.tail];
      [this.head.prev, node.next] = [node, this.head];
      this.tail = node;
    }
    this.length += 1;
  }

  move(step, direction) {
    if (direction === 1) {
      while (step--) {
        this.pointer = this.pointer.next;
      }
    } else {
      while (step--) {
        this.pointer = this.pointer.prev;
      }
    }
  }

  slice() {
    this.pointer.prev.next = this.pointer.next;
    this.pointer.next.prev = this.pointer.prev;
  }

  remove() {
    if (this.length === 0) {
      return;
    }
    const returnNode = this.pointer;

    if (this.length === 1) {
      this.length -= 1;
      this.head = null;
      this.tail = null;
      this.pointer = null;
      return returnNode.value;
    }
    if (this.lenngth === 2) {
      this.length -= 1;
      this.head = this.pointer.next;
      this.tail = null;
      return returnNode.value;
    }
    /* length 가 3이상일 경우엔 slice 호출 */
    this.slice();
    this.length -= 1;
    return returnNode.value;
  }
}

function solution() {
  const LinkedList = new CircularLinkedList();
  for (let i = 1; i <= N; i += 1) {
    LinkedList.insert(i);
  }

  const result = [];
  let direction = 1; /* 1은 정방향 , -1은 역방향 */
  let cnt = 0;

  while (LinkedList.length !== 0) {
    if (cnt === M) {
      direction *= -1;
      cnt = 0;
    }
    LinkedList.move(K, direction);
    result.push(LinkedList.remove());
    cnt += 1;
  }
  console.log(result.join('\n'));
}

solution();