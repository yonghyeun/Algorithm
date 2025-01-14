const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const num = Number(fs.readFileSync(filePath).toString().trim());

const memoFibo = (
  num,
  memo = {
    0: 0,
    1: 1,
    2: 1,
  }
) => {
  if (memo[num]) {
    return memo[num];
  }

  memo[num] = memoFibo(num - 1, memo) + memoFibo(num - 2, memo);
  return memo[num];
};

console.log(memoFibo(num));
