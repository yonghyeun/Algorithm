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

const dp = Array.from({ length: Math.max(...inputs) + 1 }, () =>
  Array.from({ length: 3 }, () => 0)
);

dp[1][0] = 1; // 1

dp[2][1] = 1; // 2

dp[3][0] = 1; // 2+1
dp[3][1] = 1; // 1+2
dp[3][2] = 1; // 3

for (let i = 4; i <= Math.max(...inputs); i++) {
  dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % 1000000009;
  dp[i][1] = (dp[i - 2][0] + dp[i - 2][2]) % 1000000009;
  dp[i][2] = (dp[i - 3][0] + dp[i - 3][1]) % 1000000009;
}

let result = "";
for (let i = 0; i < N; i++) {
  result += (dp[inputs[i]].reduce((acc, cur) => acc + cur) % 1000000009) + "\n";
}
console.log(result);