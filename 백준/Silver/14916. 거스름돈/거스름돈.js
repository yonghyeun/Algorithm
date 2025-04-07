const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const N = +fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const dp = Array.from({ length: N + 1 }, () => 0);

  dp[1] = -1;
  dp[2] = 1;
  dp[3] = -1;
  dp[4] = 2;
  dp[5] = 1;
  dp[6] = 3;
  dp[7] = 2;
  dp[8] = 4;

  if (dp[N]) {
    console.log(dp[N]);
    return;
  }

  // f(n) = min(f(n -2) , f(n-5)) + 1
  for (let i = 9; i <= N; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 5]) + 1;
  }
  console.log(dp[N]);
};
solution();