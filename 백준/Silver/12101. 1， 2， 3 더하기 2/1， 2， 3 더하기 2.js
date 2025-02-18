const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dp = Array(N + 1).fill(0);

dp[1] = ["1"];
dp[2] = ["1+1", "2"];
dp[3] = ["1+1+1", "1+2", "2+1", "3"];

for (let index = 4; index <= N; index++) {
  const array = [
    ...dp[index - 1].map((el) => `${el}+1`),
    ...dp[index - 2].map((el) => `${el}+2`),
    ...dp[index - 3].map((el) => `${el}+3`),
  ].sort((a, b) => a.localeCompare(b));

  dp[index] = array;
}

console.log(dp[N][K - 1] || -1);
