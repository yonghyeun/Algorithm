const fs = require("fs");
const { tmpdir } = require("os");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [length, ...array] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 합병 정렬 때리기

const solution = () => {
  const sort = (left, mid, right) => {
    const tempArray = [];

    let leftStart = left;
    let rightStart = mid + 1;

    while (leftStart <= mid && rightStart <= right) {
      const leftItem = array[leftStart];
      const rightItem = array[rightStart];

      if (leftItem > rightItem) {
        tempArray.push(leftItem);
        leftStart++;
      } else {
        tempArray.push(rightItem);
        rightStart++;
      }
    }

    while (leftStart <= mid) {
      tempArray.push(array[leftStart]);
      leftStart++;
    }

    while (rightStart <= right) {
      tempArray.push(array[rightStart]);
      rightStart++;
    }

    tempArray.forEach((value, index) => {
      array[left + index] = value;
    });
  };

  const mergeSort = (left, right) => {
    if (left >= right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);
    mergeSort(left, mid);
    mergeSort(mid + 1, right);
    sort(left, mid, right);
  };

  mergeSort(0, length - 1);
  console.log(array.join("\n"));
};

solution();
