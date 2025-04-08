const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, K, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .flatMap((line) => line.split(" ").map(Number));

const coins = [...new Set(inputs)].sort((a, b) => a - b);

const dp = Array(K + 1).fill(Infinity);
dp[0] = 0;

for (let coin of coins) {
  for (let price = coin; price <= K; price++) {
    if (dp[price - coin] !== Infinity) {
      dp[price] = Math.min(dp[price], dp[price - coin] + 1);
    }
  }
}

console.log(dp[K] === Infinity ? -1 : dp[K]);