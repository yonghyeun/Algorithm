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

let total = array[0];
let subTotal = array[0];

array.slice(1).forEach((value) => {
  subTotal = Math.max(subTotal + value, value);
  total = Math.max(total, subTotal);
});

console.log(total);
