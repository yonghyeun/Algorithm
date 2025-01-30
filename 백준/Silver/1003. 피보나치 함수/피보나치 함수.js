const fs = require("fs");
const os = require("os");

const filePath = os.platform() === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
const testCases = input.slice(1).map(Number);

testCases.forEach((n) => {
  const memo = { 0: [1, 0], 1: [0, 1] }; // 0과 1의 호출 횟수를 저장하는 객체

  const fibo = (n) => {
    if (memo[n] !== undefined) {
      return memo[n];
    }

    const [zeroCount1, oneCount1] = fibo(n - 1);
    const [zeroCount2, oneCount2] = fibo(n - 2);

    memo[n] = [zeroCount1 + zeroCount2, oneCount1 + oneCount2];
    return memo[n];
  };

  const [zero, one] = fibo(n);
  console.log(zero, one);
});
