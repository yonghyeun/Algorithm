const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const array = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((value) => {
    const arr = value.split(" ").map((v) => +v);
    return arr;
  });

// 끝나는 시간이 가장 빠른 순으로 정렬
array.sort((a, b) => {
  return a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0];
});

let count = 1;
let endTime = array[0][1];
array.slice(1).forEach(([start, end]) => {
  if (start < endTime) {
    return;
  }
  count++;
  endTime = end;
});

console.log(count);
