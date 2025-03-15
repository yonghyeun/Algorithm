const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const N = +fs.readFileSync(filePath).toString().trim();

const filled = Array(N).fill(0);
const empty = Array(N).fill(0);

filled[0] = 1;
empty[0] = 1;

// solution(N) = 2*fill(N) + empty(N)
// fill(N) = empty(N-1) + fill(N-1)
// empty(N) = 2*fill(N-1) + empty(N-1)

for (let i = 1; i < N; i++) {
  filled[i] = (empty[i - 1] + filled[i - 1]) % 9901;
  empty[i] = (empty[i - 1] + 2 * filled[i - 1]) % 9901;
}

console.log((2 * filled[N - 1] + empty[N - 1]) % 9901);