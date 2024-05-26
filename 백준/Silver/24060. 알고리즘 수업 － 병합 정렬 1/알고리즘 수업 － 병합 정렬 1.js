const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let inputs = fs.readFileSync(filePath).toString().split('\n');
const [N, K] = inputs[0].split(' ').map(Number);
let GlobalArr = inputs[1].split(' ').map(Number);

let cnt = 0;
let answer = -1;
function solution() {
  function mergeSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  function merge(arr, start, mid, end) {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);
    let leftIdx = 0,
      rightIdx = 0,
      arrIdx = start;

    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] <= right[rightIdx]) {
        arr[arrIdx++] = left[leftIdx++];
        cnt++;
      } else {
        arr[arrIdx++] = right[rightIdx++];
        cnt++;
      }
      if (cnt === K) answer = arr[arrIdx - 1];
    }

    while (leftIdx < left.length) {
      arr[arrIdx++] = left[leftIdx++];
      cnt++;
      if (cnt === K) answer = arr[arrIdx - 1];
    }

    while (rightIdx < right.length) {
      arr[arrIdx++] = right[rightIdx++];
      cnt++;
      if (cnt === K) answer = arr[arrIdx - 1];
    }
  }

  mergeSort(GlobalArr, 0, N - 1);
  console.log(answer);
}

solution();
