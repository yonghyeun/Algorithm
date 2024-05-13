const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'quiz.txt');

const [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(Number);

/*
  x 가 0일 땐 배열에서 가장 큰 값을 출력하며, 빈 배열의 경우엔 0을 출력
  x 가 0이 아닐 땐 배열에서  해당 값을 집어 넣기
*/

class MaxHeap {
  arr = [];
  length = 0;

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  insert(value) {
    this.arr.push(value);
    this.length += 1;

    if (this.length >= 2) {
      this.heapifyUp(this.length - 1);
    }
  }

  heapifyUp(k) {
    while (k > 0) {
      const p = Math.floor((k - 1) / 2);
      if (this.arr[k] > this.arr[p]) {
        this.swap(k, p);
        k = p;
      } else {
        break;
      }
    }
  }

  deleteMax() {
    if (this.length === 0) {
      return 0;
    }

    if (this.length === 1) {
      const maxValue = this.arr.pop();
      this.length = 0;
      return maxValue;
    }

    this.swap(0, this.length - 1);
    const maxValue = this.arr.pop();
    this.length -= 1;

    this.heapifyDown(0);
    return maxValue;
  }

  heapifyDown(k) {
    while (k * 2 + 1 <= this.length - 1) {
      const [L, R] = [k * 2 + 1, k * 2 + 2];

      let m = k;

      if (this.arr[L] > this.arr[m]) {
        m = L;
      }
      if (this.arr[R] && this.arr[R] > this.arr[m]) {
        m = R;
      }

      if (m !== k) {
        this.swap(m, k);
        k = m;
      } else {
        break;
      }
    }
  }
}

const heap = new MaxHeap();

let result = '';

arr.forEach((value) => {
  if (value === 0) {
    const t = heap.deleteMax();
    result += t + '\n';
  } else {
    heap.insert(value);
  }
});

console.log(result.trim());
