const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
const n = +fs.readFileSync(filePath).toString().trim();

const dp = Array(n + 1).fill(0);

dp[1] = true;
dp[2] = false;
dp[3] = true;

for (let i = 4; i <= n; i++) {
  dp[i] = !(dp[i - 1] && dp[i - 3]);
}

console.log(dp[n] ? "SK" : "CY");