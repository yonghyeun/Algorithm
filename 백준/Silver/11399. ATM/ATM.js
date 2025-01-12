const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [_, array] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

// 최소 시간은 모두 정렬 된 상태로 존재 하는 경우 + 누적합

const insertSort = (array) => {
  for (let index = 1; index < array.length; index++) {
    const item = array[index];
    let prev = index - 1;
    while (0 <= prev && item < array[prev]) {
      array[prev + 1] = array[prev];
      prev--;
    }

    if (prev + 1 !== index) {
      array[prev + 1] = item;
    }
  }
};

const solution = () => {
  insertSort(array);
  const cumulativeArray = [];

  array.forEach((value, index) => {
    index > 0
      ? cumulativeArray.push(cumulativeArray[index - 1] + value)
      : cumulativeArray.push(value);
  });

  console.log(cumulativeArray.reduce((a, b) => a + b));
};

solution();