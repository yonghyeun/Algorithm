const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// BigInt로 결과 배열 초기화
const result = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 0n)
);

result[0][0] = 1n;

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    const step = arr[row][col];
    if (step === 0) continue;

    if (row + step < N) {
      result[row + step][col] += result[row][col];
    }

    if (col + step < N) {
      result[row][col + step] += result[row][col];
    }
  }
}

console.log(result[N - 1][N - 1].toString());