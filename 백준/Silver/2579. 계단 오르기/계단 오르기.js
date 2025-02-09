const [N, ...stairs] = require("fs")
  .readFileSync(process.platform === "linux" ? "./dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

// 최적화 이론의 한 기술이며, 특정 범위까지의 값을 구하기 위해서 그것과
// 다른 범위까지의 값을 이용하여 효율적으로 값을 구하는 알고리즘 설계 기법이다.
// 이전에 계산된 내용을 재사용한다는 것을 명심하자

const dp = new Array(N).fill(0);

dp[0] = stairs[0];
dp[1] = stairs[0] + stairs[1];
dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

for (let index = 3; index < N; index++) {
  // index -2 를 밟고 본인을 밟는 수
  const first = dp[index - 2] + stairs[index];
  // index -3, index -1 을 밟고 본인을 밟는 수
  const second = dp[index - 3] + stairs[index - 1] + stairs[index];

  dp[index] = Math.max(first, second);
}

console.log(dp[N - 1]);
