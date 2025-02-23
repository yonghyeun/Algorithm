const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const N = +fs.readFileSync(filePath).toString();

// 전체 문제 : 자리수가 N 인 숫자에서 모든 숫자가 등장 할 수 있는 경우의 수
// 부분 문제 : 자리수가 N 인 숫자에서 특정 숫자 k 가 등장 할 수 있는 경우의 수
// 부분문제로 표현한 전체 문제 : 전체 문제 = k 0 to 9 , sum(부분문제(k))
// 부분 문제 해결 방법 : f(N, k) = j 0 to k, sum (f(N-1 , j))

const solveSubProblem = (prevDp, number) => {
  return prevDp.slice(0, number + 1).reduce((acc, cur) => acc + cur, 0) % 10007;
};

const solveMainProblem = (N) => {
  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));
  dp[1] = Array(10).fill(1);

  for (let depth = 2; depth <= N; depth++) {
    for (let number = 0; number < 10; number++) {
      dp[depth][number] = solveSubProblem(dp[depth - 1], number);
    }
  }

  console.log(dp[N].reduce((acc, cur) => acc + cur, 0) % 10007);
};

solveMainProblem(N);