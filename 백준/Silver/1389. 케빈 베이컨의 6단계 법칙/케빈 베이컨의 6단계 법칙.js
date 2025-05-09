const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, _] = inputs[0].split(" ").map(Number);
const edges = inputs.slice(1).map((line) => line.split(" ").map(Number));

const W = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

edges.forEach(([a, b]) => {
  W[a][b] = 1;
  W[b][a] = 1;
});

// 자기 자신으로 가는 경로는 0
for (let i = 1; i <= N; i++) {
  W[i][i] = 0;
}

const shortestPath = (N, W) => {
  // 경유할 정점 K
  for (let K = 0; K <= N; K++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        W[i][j] = Math.min(
          // K 노드를 경유 하지 않는 경우
          W[i][j],
          // K 노드를 경유 하는 경우
          W[i][K] + W[K][j]
        );
      }
    }
  }

  return (
    W.slice(1)
      .map((row) => row.slice(1).reduce((acc, cur) => acc + cur))
      .findIndex((total, _, array) => total === Math.min(...array)) + 1
  );
};

console.log(shortestPath(N, W));
