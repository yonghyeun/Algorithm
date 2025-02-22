const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [testCase, ...array] = fs.readFileSync(filePath).toString().split(`\n`);

const tests = [];

for (let i = 0; i < testCase; i++) {
  const N = +array.shift();
  const A = array.shift().split(" ").map(Number);
  const B = array.shift().split(" ").map(Number);

  tests.push([N, A, B]);
}

const solution = (N, A, B) => {
  const dp = [];
  dp.push(Array(N + 1).fill(0));
  dp.push(Array(N + 1).fill(0));

  dp[0][1] = A[0];
  dp[1][1] = B[0];

  for (let i = 2; i <= N; i++) {
    dp[0][i] = Math.max(dp[1][i - 2], dp[1][i - 1]) + A[i - 1];
    dp[1][i] = Math.max(dp[0][i - 2], dp[0][i - 1]) + B[i - 1];
  }

  console.log(Math.max(dp[0][N], dp[1][N]));
};

tests.forEach((test) => solution(...test));
