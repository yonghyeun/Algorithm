const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
/*
  x 가 0일 땐 배열에서 가장 큰 값을 출력하며, 빈 배열의 경우엔 0을 출력
  x 가 0이 아닐 땐 배열에서  해당 값을 집어 넣기
*/

class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(value) {
    this.heap.push(value);
    this.size += 1;
    if (this.size >= 2) {
      this.heapifyUp();
    }
  }

  /* k 번째 노드를 root 노드 방향으로 재귀적으로 올리며 힙성질 유지 */
  heapifyUp(k = this.size - 1) {
    if (k === 0) {
      /* 루트 노드에 도달하면 재귀 멈추기 */
      return;
    }

    const p = Math.floor((k - 1) / 2);
    if (this.heap[k] < this.heap[p]) {
      this.swap(k, p);
      /* 부모노드와 자리를 바꾸면 부모 노드 자리에서 heapifyUp 재실행 */
      this.heapifyUp(p);
    }
  }

  deleteMax() {
    if (this.size === 0) {
      return 0;
    }
    if (this.size === 1) {
      this.size -= 1;
      return this.heap.pop();
    }

    /* root node 와 leaf node 자리 바꾼 후 pop */
    this.swap(0, this.size - 1);
    const minValue = this.heap.pop();
    this.size -= 1;

    this.heapifyDown(0);
    return minValue;
  }

  heapifyDown(k) {
    /* 자식 노드가 존재하지 않는 leaf node면 재귀 종료 */
    if (k * 2 + 1 > this.size - 1) {
      return;
    }

    const [L, R] = [k * 2 + 1, k * 2 + 2];

    /* 자식 노드간 max 값 비교 
    오른쪽 자식 노드 존재하지 않을 경우 대비하여 ?? 연산자 활용 */
    const minChildIdx =
      this.heap[L] < (this.heap[R] ?? this.heap[L] + 1) ? L : R;
    const minChildValue = this.heap[minChildIdx];

    /* 자식노드가 k번째 노드보다 크다면 
    두 노드의 위치를 바꾸고 바꾼 위치에서 재귀적으로 자식 노드와 비교
    */
    const minIdx = minChildValue < this.heap[k] ? minChildIdx : k;
    if (minIdx === minChildIdx) {
      this.swap(k, minChildIdx);
      this.heapifyDown(minChildIdx);
    }
  }
}

const Heap = new MinHeap();

const result = [];

arr.forEach((value) => {
  if (value === 0) {
    result.push(Heap.deleteMax());
  } else {
    Heap.insert(value);
  }
});

console.log(result.join('\n'));
