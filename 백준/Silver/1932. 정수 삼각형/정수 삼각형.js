const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [maxDepth, ...array] = fs.readFileSync(filePath).toString().split(`\n`);

// DP(f,i) = array[f,i] + max(DP(f-1, i-1), DP(f-1, i))

const solution = (array, maxDepth) => {
  const dp = Array.from({ length: maxDepth }, (_, index) =>
    Array(index + 1).fill(0)
  );

  dp[0][0] = array[0][0];

  for (let depth = 1; depth < maxDepth; depth++) {
    dp[depth] = dp[depth].map((_, index) => {
      const left = dp[depth - 1][index - 1] || 0;
      const right = dp[depth - 1][index] || 0;
      return array[depth][index] + Math.max(left, right);
    });
  }

  console.log(Math.max(...dp[maxDepth - 1]));
};

solution(
  array.map((strArr) => strArr.split(" ").map(Number)),
  +maxDepth
);