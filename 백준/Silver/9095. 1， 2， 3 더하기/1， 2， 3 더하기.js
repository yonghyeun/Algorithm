const filePath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
const [testCase, ...inputs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

const dp = Array(12).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 12; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 0; i < testCase; i++) {
  console.log(dp[inputs[i]]);
}
