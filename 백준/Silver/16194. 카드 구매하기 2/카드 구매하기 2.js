const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const [N, ...array] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .flatMap((str) => str.split(" ").map(Number));

// 전체 문제 : N 개의 카드를 가지기 위해 지불해야 하는 최대 P[i]
// 부분 문제 : N 개의 카드를 가지기 위해 가격이 P[i] 인 카드를 몇 개 구매 할 수 있는가?

// 해결해야 하는 부분 문제 : 0 부터 N 개의 카드 중 i 번째 카드를 구매 할 때 낼 수 있는 최대 가격

array.unshift(0);

for (let i = 2; i <= N; i++) {
  let min = array[i];
  for (let j = 1; j <= i; j++) {
    const div = Math.floor(i / j);
    const mod = i % j;
    min = Math.min(min, array[j] * div + array[mod]);
  }
  array[i] = min;
}

console.log(array[N]);
