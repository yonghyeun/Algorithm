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
    // endPoint
    if (start >= end) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid); // mid 기준 좌측 배열 정렬 후 탈출
    mergeSort(arr, mid + 1, end); // mid 기준 우측 배열 정렬 후 탈출
    merge(arr, start, mid, end); // 호출 마다 mid 기준 좌측, 우측 배열 이용하여 전체 배열 정렬
  }

  function merge(arr, start, mid, end) {
    const leftArr = arr.slice(start, mid + 1);
    const leftLength = mid + 1 - start;

    const rightArr = arr.slice(mid + 1, end + 1);
    const rightLenght = end - mid;

    let leftPointer = 0;
    let rightPointer = 0;
    let GlobalPointer = start;

    console.log('------');
    console.log(`정렬 전 : ${GlobalArr}`);

    while (leftPointer < leftLength && rightPointer < rightLenght) {
      if (leftArr[leftPointer] <= rightArr[rightPointer]) {
        arr[GlobalPointer++] = leftArr[leftPointer++];
      } else {
        arr[GlobalPointer++] = rightArr[rightPointer++];
      }
      cnt++;
      if (cnt === K) answer = arr[GlobalPointer - 1];
    }

    while (leftPointer < leftLength) {
      arr[GlobalPointer++] = leftArr[leftPointer++];
      cnt++;
      if (cnt === K) answer = arr[GlobalPointer - 1];
    }

    while (rightPointer < rightLenght) {
      arr[GlobalPointer++] = rightArr[rightPointer++];
      cnt++;
      if (cnt === K) answer = arr[GlobalPointer - 1];
    }

    console.log(`왼쪽 배열 : ${leftArr}`);
    console.log(`오른쪽 배열 : ${rightArr}`);
    console.log(`정렬 후 : ${GlobalArr}`);
  }

  mergeSort(GlobalArr, 0, N - 1);
  console.log('------');
  console.log(GlobalArr);
  console.log(answer);
}

solution();
