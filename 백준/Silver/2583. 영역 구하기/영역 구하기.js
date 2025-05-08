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

const [M, N, K] = inputs[0].split(" ").map(Number);
const rectangles = inputs.slice(1).map((line) => line.split(" ").map(Number));

const matrix = Array.from({ length: M }, () => Array(N).fill(1));

rectangles.forEach(([x1, y1, x2, y2]) => {
  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      matrix[i][j] = 0;
    }
  }
});

const visited = Array.from({ length: M }, () => Array(N).fill(false));

const OFFSETS = [
  [-1, 0], // up
  [1, 0], // down
  [0, -1], // left
  [0, 1], // right
];

const dfs = (x, y) => {
  visited[x][y] = true;
  let area = 1;

  for (const [dx, dy] of OFFSETS) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      matrix[nx][ny] === 1 &&
      !visited[nx][ny]
    ) {
      area += dfs(nx, ny);
    }
  }

  return area;
};

const result = [];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (matrix[i][j] === 1 && !visited[i][j]) {
      const area = dfs(i, j);
      result.push(area);
    }
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join(" "));
