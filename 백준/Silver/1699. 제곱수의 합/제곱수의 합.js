const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const N = +fs.readFileSync(filePath).toString();

const dp = Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= N; i++) {
  let min = i;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, dp[i - j * j] + 1);
  }
  dp[i] = min;
}

console.log(dp[N]);