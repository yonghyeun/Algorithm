class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;

    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size -= 1;
    return value;
  }

  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }
}

const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
const T = parseInt(inputs[0]);

const offsets = [
  [-1, 0], // 위
  [1, 0], // 아래
  [0, -1], // 왼쪽
  [0, 1], // 오른쪽
];

for (let i = 1, j = 0; i <= T; i++) {
  const [M, N, K] = inputs[i + j].split(" ").map(Number);

  const coords = inputs
    .slice(i + j + 1, i + j + 1 + K)
    .map((line) => line.split(" ").map(Number));

  j += K;

  const graph = Array.from({ length: N }, () => Array(M).fill(0));

  // graph에 배추 심기
  coords.forEach(([x, y]) => {
    graph[y][x] = 1;
  });

  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  let count = 0;

  const dfs = (x, y) => {
    offsets
      .map(([dx, dy]) => [x + dx, y + dy])
      .forEach(([nx, ny]) => {
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
          return;
        }

        if (visited[nx][ny] || graph[nx][ny] === 0) {
          return;
        }

        visited[nx][ny] = true;

        dfs(nx, ny);
      });
  };

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (visited[x][y] || graph[x][y] === 0) {
        continue;
      }
      count += 1;
      visited[x][y] = true;
      dfs(x, y);
    }
  }

  console.log(count);
}
