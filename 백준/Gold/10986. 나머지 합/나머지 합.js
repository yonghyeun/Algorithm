const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const A = inputs[1].split(" ").map(Number); // 일반 배열

const countArray = Array(M).fill(0);

let prefixSum = 0;
for (const value of A) {
  prefixSum += value;
  countArray[prefixSum % M] += 1;
}

let result = countArray[0];

for (let i = 0; i < M; i++) {
  const count = countArray[i];
  if (count > 1) {
    result += (count * (count - 1)) / 2;
  }
}
console.log(result);