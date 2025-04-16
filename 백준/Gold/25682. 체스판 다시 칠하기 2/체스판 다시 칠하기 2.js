const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = inputs[0].split(" ").map(Number);

// 인덱싱 헷갈리니 pad 추가
const boards = [
  void 0,
  ...inputs.slice(1).map((line) => [void 0, ...line.split("")]),
];

// 조건 1. B로 시작하는 체스 보드의 누적합은 K ** 2 -W로 시작하는 체스 보드와 같음

const matrix = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    const isBlack = (i + j) % 2 === 0;
    matrix[i][j] = Number(
      isBlack ? boards[i][j] === "B" : boards[i][j] === "W"
    );
  }
}

// cumMatrix[i][j] 는 (0, 0) 부터 (i, j) 까지의 누적합
const cumMatrix = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    cumMatrix[i][j] =
      cumMatrix[i - 1][j] +
      cumMatrix[i][j - 1] -
      cumMatrix[i - 1][j - 1] +
      matrix[i][j];
  }
}

// 모든 K x K 체스 보드에 대해 최소값 찾기
let minChanges = Infinity;

for (let i = K; i <= N; i++) {
  for (let j = K; j <= M; j++) {
    // (i-K+1, j-K+1)부터 (i, j)까지의 K×K 체스판
    const changes =
      cumMatrix[i][j] -
      cumMatrix[i - K][j] -
      cumMatrix[i][j - K] +
      cumMatrix[i - K][j - K];

    // B로 시작하는 체스판과 W로 시작하는 체스판 중 최소값
    minChanges = Math.min(minChanges, changes, K * K - changes);
  }
}

console.log(minChanges);