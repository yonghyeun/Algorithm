const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, K] = fs.readFileSync(filePath).toString().trim().split(/\s/);

const dp = Array.from({ length: N }, (_, idx) =>
  Array.from({ length: idx + 2 }, () => 1)
);

dp[0][0] = 1;
dp[0][1] = 1;

for (let i = 1; i < N; i++) {
  for (let j = 1; j < i + 1; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[N - 1][K]);