const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, ...cards] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const dp = Array(N + 1).fill(Infinity); // 충분히 큰 값으로 초기화
dp[0] = 0; // 0개의 카드를 구매하는 비용은 0

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + cards[j - 1]);
  }
}

console.log(dp[N]);