const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, ...array] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .flatMap((v) => v.split(" ").map(Number));

// D[i] = k 일 때를 만족하는 array[i]의 최소값
// kArray[1] = 35 가 의미하는 것은 길이가 1인 부분배열들 중 가장 마지막 원소에 올 수 있는 값은 35
const kArray = [0];

for (let i = 0; i < N; i++) {
  let start = 0;
  let end = kArray.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (kArray[mid] < array[i]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (start === kArray.length) {
    kArray.push(array[i]);
  } else {
    kArray[start] = array[i];
  }
}

console.log(kArray.length - 1);
