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

const dp = Array(N).fill(1);

for (let index = 1; index < N; index++) {
  const kArray = dp
    .slice(0, index)
    .filter((_, kIndex) => array[index] > array[kIndex]);

  dp[index] = Math.max(...kArray, 0) + 1;
}

console.log(Math.max(...dp));
