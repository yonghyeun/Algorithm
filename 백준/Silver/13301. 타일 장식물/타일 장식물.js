const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
const N = BigInt(fs.readFileSync(filePath).toString().trim());

const dp = Array(Number(N) + 1).fill(0n);

dp[0] = 1n;
dp[1] = 1n;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

const perimeter = 2n * (dp[Number(N)] + dp[Number(N) - 1]);
console.log(perimeter.toString());
