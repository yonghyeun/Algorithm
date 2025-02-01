const fs = require("fs");
const os = require("os");

const filePath = os.platform() === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const usedArray = Array.from({ length: N + 1 }, () => false);
const resultArray = Array.from({ length: M }, () => NaN);

const back = (depth) => {
  if (depth === M) {
    console.log(resultArray.join(" "));
    return;
  }

  for (let index = 1; index <= N; index++) {
    if (!usedArray[index]) {
      resultArray[depth] = index;
      usedArray[index] = true;
      back(depth + 1);
      usedArray[index] = false;
    }
  }
};

back(0);