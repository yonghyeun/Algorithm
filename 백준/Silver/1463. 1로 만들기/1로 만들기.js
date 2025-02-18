const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
const N = +fs.readFileSync(filePath).toString().trim();

const f = (n) => {
  if (n <= 1) {
    return 0;
  }
  const a = f(parseInt(n / 3)) + (n % 3);
  const b = f(parseInt(n / 2)) + (n % 2);
  return Math.min(a, b) + 1;
};

console.log(f(N));
