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

/**
 * f(number , index) = max(
 *  0 to index -1 = j, f(array[j], j)
 * )
 */
const f = (originalArray, maxArray, number, index) => {
  let max = 0;
  for (let i = index - 1; i >= 0; i--) {
    // 어떤 number가 다른 최대 길이 수열 뒤에 붙을 수 있고
    // 붙을 수 있는 수열들의 합 중 가장 큰 수열을 찾는다.
    if (originalArray[i] < number && maxArray[i] > max) {
      max = maxArray[i];
    }
  }
  return max + number;
};

const maxArray = [array[0]];
for (i = 1; i < N; i++) {
  const max = f(array, maxArray, array[i], i);
  maxArray.push(max);
}

console.log(Math.max(...maxArray));