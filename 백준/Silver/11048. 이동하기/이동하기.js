const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [[N, M], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const result = Array.from({ length: N }, () => Array(M).fill(0));

result[0][0] = arr[0][0];

for (let i = 1; i < M; i++) {
  result[0][i] = arr[0][i] + result[0][i - 1];
}

for (let j = 1; j < N; j++) {
  result[j][0] = arr[j][0] + result[j - 1][0];
}

for (let row = 1; row < N; row++) {
  for (let col = 1; col < M; col++) {
    result[row][col] =
      Math.max(result[row - 1][col], result[row][col - 1]) + arr[row][col];
  }
}

console.log(result[N - 1][M - 1]);