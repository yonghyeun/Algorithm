class Heap {
  constructor(array) {
    this.arr = array;
    this.length = array.length;
    this.makeHeap();
  }

  heapifyDown(k, n = this.length - 1) {
    while (k * 2 + 1 <= n) {
      /*
      k 노드와 L ,R  자식 노드와의 값을 비교하고 
      부모 자식 중 가장 큰 값의 인덱스를 m 에 저장  
      */
      const [L, R] = [k * 2 + 1, k * 2 + 2]; // 자식 노드들의 인덱스
      let m = k;
      if (this.arr[L] > this.arr[k]) {
        m = L;
      }
      if (R <= n && this.arr[R] > this.arr[m]) {
        m = R;
      }
      /*
      만약 k 가 자식 노드보다 값이 작다면 
      해당 자식노드와 위치를 바꾸고  바꾼 위치에서 반복문 재실행
      */
      if (m != k) {
        [this.arr[m], this.arr[k]] = [this.arr[k], this.arr[m]];
        k = m;
      } else {
        break;
      }
    }
  }

  makeHeap() {
    for (
      let index = Math.floor((this.length - 1) / 2);
      index >= 0;
      index -= 1
    ) {
      this.heapifyDown(index);
    }
  }

  heapifyUp(k) {
    while (k > 0) {
      const p = Math.floor((k - 1) / 2); // 부모 노드의 인덱스
      if (this.arr[k] > this.arr[p]) {
        [this.arr[k], this.arr[p]] = [this.arr[p], this.arr[k]];
        k = p;
      } else {
        break;
      }
    }
  }

  insert(value) {
    this.arr.push(value);
    this.length += 1;
    this.heapifyUp(this.length - 1);
  }

  findMax() {
    return this.arr[0];
  }

  deleteMax() {
    const maxValue = this.arr[0]; // 반환할 값을 캐싱
    /* root node , leaf node  값 스왑 */
    [this.arr[0], this.arr[this.length - 1]] = [
      this.arr[this.length - 1],
      this.arr[0],
    ];
    /* leaf node 값 (이전 root node) 제거*/
    this.arr.pop();
    this.length -= 1;
    /* root node 부터 heapify-down */
    this.heapifyDown(0);
    return maxValue;
  }
}

const arr = [2, 8, 6, 1, 10, 15, 3, 12, 11];
const heap = new Heap(arr);
console.log(heap.arr);
heap.insert(20);
console.log(heap.arr);
console.log(heap.deleteMax());
console.log(heap.arr);
