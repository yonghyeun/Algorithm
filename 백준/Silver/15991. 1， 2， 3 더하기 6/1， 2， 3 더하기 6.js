const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = Array(Math.max(...inputs) + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 2;
dp[4] = 3;
dp[5] = 3;
dp[6] = 6;

for (let index = 7; index <= Math.max(...inputs); index++) {
  dp[index] = (dp[index - 2] + dp[index - 4] + dp[index - 6]) % 1000000009;
}

let result = "";
for (let i = 0; i < N; i++) {
  result += dp[inputs[i]] + "\n";
}
console.log(result);
