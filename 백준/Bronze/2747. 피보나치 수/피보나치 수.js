const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const num = Number(fs.readFileSync(filePath).toString().trim());

// 행렬 곱셈 함수
const multiplyMatrix = (a, b) => {
  return [
    [
      a[0][0] * b[0][0] + a[0][1] * b[1][0],
      a[0][0] * b[0][1] + a[0][1] * b[1][1],
    ],
    [
      a[1][0] * b[0][0] + a[1][1] * b[1][0],
      a[1][0] * b[0][1] + a[1][1] * b[1][1],
    ],
  ];
};

// 행렬 제곱 함수
const powerMatrix = (matrix, n) => {
  if (n === 1) {
    return matrix;
  }
  if (n % 2 === 0) {
    const halfPower = powerMatrix(matrix, n / 2);
    return multiplyMatrix(halfPower, halfPower);
  } else {
    return multiplyMatrix(matrix, powerMatrix(matrix, n - 1));
  }
};

// 피보나치 수 계산 함수
const fiboMatrix = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const baseMatrix = [
    [1, 1],
    [1, 0],
  ];
  const resultMatrix = powerMatrix(baseMatrix, n - 1);
  return resultMatrix[0][0];
};

console.log(fiboMatrix(num));
