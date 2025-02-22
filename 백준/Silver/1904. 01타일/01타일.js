const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const N = +fs.readFileSync(filePath).toString();

// f(n) = f(n-1) + f(n-2)
// 왜 ? n 번째 경우의 수는 1, n-1 번째 경우의 수 + 00,n-2 번째 경우의 수기 때문에

const dp = Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);
