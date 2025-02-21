const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
const [N, ...array] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .flatMap((v) => v.split(" ").map(Number));

const lis = (arr) => {
  const P = [];
  const binarySearch = (P, target) => {
    let left = 0;
    let right = P.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (P[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };

  for (const num of arr) {
    const pos = binarySearch(P, num);
    if (pos < P.length) {
      P[pos] = num;
    } else {
      P.push(num);
    }
  }

  return P.length;
};

console.log(lis(array));
