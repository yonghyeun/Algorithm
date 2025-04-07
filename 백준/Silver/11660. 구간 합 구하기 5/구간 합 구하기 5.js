const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [[N, M], ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

const matrix = inputs.slice(0, N);
const questions = inputs.slice(N);

const cumulativeSum = (array) => {
  const result = [0, array[0]]; // 인덱스 헷갈리니까 데이터 하나 추가

  for (let index = 1; index < array.length; index++) {
    result.push(result[index] + array[index]);
  }

  return result;
};

const cumMatrix = [0, ...matrix.map(cumulativeSum)];

const getSum = (x1, y1, x2, y2) => {
  let sum = 0;

  for (let index = x1; index <= x2; index++) {
    sum += cumMatrix[index][y2] - cumMatrix[index][y1 - 1];
  }
  return sum;
};

let result = "";

questions.forEach((questions) => {
  const sum = getSum(...questions);
  result += `${sum}\n`;
});

console.log(result.trim());