const fs = require("fs");
const { isErrored } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, K, ...array] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .flatMap((v) => v.split(" ").map(Number));

const solution = (array) => {
  let count = K;

  for (let index = 1; index < array.length; index++) {
    if (count < 0) {
      break;
    }

    let prev = index - 1;
    const item = array[index];

    while (0 <= prev && item < array[prev]) {
      array[prev + 1] = array[prev];
      count--;
      prev--;

      if (count === 0) {
        console.log(array.join(" "));
      }
    }

    if (prev + 1 !== index) {
      array[prev + 1] = item;
      count--;

      if (count === 0) {
        console.log(array.join(" "));
      }
    }
  }

  if (count > 0) {
    console.log(-1);
  }
};

solution(array);
