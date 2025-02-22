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
  .map(Number);

const dp = Array(N).fill(0);

dp[0] = array[0];
dp[1] = array[0] + array[1];
dp[2] = Math.max(dp[0] + array[2], array[1] + array[2], dp[1]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + array[i],
    dp[i - 3] + array[i - 1] + array[i],
    dp[i - 1]
  );
}

console.log(dp[N - 1]);
