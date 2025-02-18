const path = require("path");
const filePath =
  process.platform === "linux"
    ? "./dev/stdin"
    : path.join(__dirname, "input.txt");

const N = +require("fs").readFileSync(filePath).toString();

const dp = Array(N + 1).fill(0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log((dp[N] + dp[N - 1]) * 2);
