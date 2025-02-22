const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
const array = input.slice(1).map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0][0] = array[0][0];
dp[0][1] = array[0][1];
dp[0][2] = array[0][2];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + array[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + array[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + array[i][2];
}

console.log(Math.min(...dp[N - 1]));