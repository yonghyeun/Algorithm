const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
const N = +fs.readFileSync(filePath).toString().trim();

const dp = Array(N + 1).fill(0);
dp[1] = 1n;
dp[2] = 1n;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[Number(N)].toString());
