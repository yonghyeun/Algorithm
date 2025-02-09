let [N, K, ...inputs] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .flatMap((str) => str.split(" ").map(Number));

let cnt = 0;

for (let index = N - 1; index >= 0; index--) {
  const money = inputs[index];
  const div = Math.floor(K / money);
  cnt += div;
  K -= div * money;
}

console.log(cnt);
