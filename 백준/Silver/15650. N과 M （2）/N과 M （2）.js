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

let result = "";

// 이전에 사용했던 숫자를 사용해선 안된다.

const backTracking = (depth, start) => {
  if (depth === M) {
    result += resultArray.join(" ") + "\n";
    return;
  }

  for (let number = start; number <= N; number++) {
    if (usedArray[number]) {
      continue;
    }

    usedArray[number] = true;
    resultArray[depth] = number;
    backTracking(depth + 1, number + 1);
    usedArray[number] = false;
  }
};

backTracking(0, 1);
console.log(result);
