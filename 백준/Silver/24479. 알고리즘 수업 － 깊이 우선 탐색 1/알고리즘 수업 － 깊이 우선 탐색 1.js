const fs = require("fs");
const os = require("os");

const filePath = os.platform() === "linux" ? "/dev/stdin" : "input.txt";
const [N, M, rootNode, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .flatMap((str) => str.split(" ").map(Number));

// 첫째 줄부터 N개의 줄에 정수를 한 개씩 출력한다. i번째 줄에는 정점 i의 방문 순서를 출력한다.
// 시작 정점의 방문 순서는 1이다. 시작 정점에서 방문할 수 없는 경우 0을 출력한다.

const adjacentArray = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < inputs.length; i += 2) {
  const vertex = inputs[i];
  const edge = inputs[i + 1];

  // 양방향이다!!

  adjacentArray[vertex].push(edge);
  adjacentArray[edge].push(vertex);
}

adjacentArray.forEach((edges) => edges.sort((a, b) => a - b));

const visited = Array(N + 1).fill(0);
const result = Array(N + 1).fill(0);
let order = 1;

const dfs = (vertex) => {
  visited[vertex] = 1;
  result[vertex] = order++;

  const edges = adjacentArray[vertex];
  for (const edge of edges) {
    if (!visited[edge]) {
      dfs(edge);
    }
  }
};

dfs(rootNode);
console.log(result.slice(1).join("\n"));
