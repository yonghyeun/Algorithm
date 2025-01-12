const fs = require("fs");
const { isErrored } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, K, ...array] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .flatMap((v) => v.split(" ").map(Number));

const insertSort = (array) => {
  for (let index = 1; index < array.length; index++) {
    const item = array[index];
    let prev = index - 1;

    while (0 <= prev && item < array[prev]) {
      array[prev + 1] = array[prev];
      prev--;
    }

    // prev + 1 !== index 라는 것은 위 while 문이 실행되어
    // 요소가 이동되었다는 것을 의미합니다.
    // while 문이 종료된 시점에서 array[prev + 1]의 값은
    // item보다 큰 값이므로, array[prev + 1]에 item 값을 삽입합니다.
    if (prev + 1 !== index) {
      array[prev + 1] = item;
    }
  }
};

const solution = (array) => {
  let count = K;
  let result;

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
        result = array[prev + 1];
      }
    }

    if (prev + 1 !== index) {
      array[prev + 1] = item;
      count--;

      if (count === 0) {
        result = array[prev + 1];
      }
    }
  }

  console.log(result ?? -1);
};

solution(array);
