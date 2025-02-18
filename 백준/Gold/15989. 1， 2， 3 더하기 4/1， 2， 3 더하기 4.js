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

// dp[n][i]
// i 는 시작하는 수식이 무엇인지 나타낸다.

dp[1][0] = 1;
dp[2][0] = 1;
dp[2][1] = 1;
dp[3][0] = 1;
dp[3][1] = 1;
dp[3][2] = 1;

for (let i = 4; i <= Math.max(...inputs); i++) {
  dp[i][0] = dp[i - 1][0];
  dp[i][1] = dp[i - 2][0] + dp[i - 2][1];
  dp[i][2] = dp[i - 3][0] + dp[i - 3][1] + dp[i - 3][2];
}

let result = "";
for (let i = 0; i < N; i++) {
  result += dp[inputs[i]].reduce((acc, cur) => acc + cur) + "\n";
}
console.log(result);
