const path = require("path");
const filePath =
  process.platform === "linux"
    ? "./dev/stdin"
    : path.join(__dirname, "input.txt");

const [testCase, ...inputs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

const dp = Array(10000000 + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 1000000; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}

for (let i = 0; i < testCase; i++) {
  console.log(dp[inputs[i]]);
}
