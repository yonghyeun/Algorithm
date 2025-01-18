const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [length, ...array] = fs.readFileSync(filePath).toString().split("\n");

let [A, B] = array.map((str) => str.split(" ").map(Number));

// S 의 최소값을 찾기 위해 A 를 재배열 한다면
// A 의 최대값의 인덱스가 B의 최소값 인덱스로 이동하면 됨

const solution = () => {
  A.sort((prev, cur) => prev - cur);
  B.sort((prev, cur) => cur - prev);

  let S = 0;

  A.forEach((value, index) => {
    S += value * B[index];
  });

  console.log(S);
};

solution();
