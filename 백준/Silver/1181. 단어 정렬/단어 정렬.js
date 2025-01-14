const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [N, ..._array] = fs.readFileSync(filePath).toString().trim().split("\n");

const array = [...new Set(_array)];

const stringMap = array.reduce((map, string) => {
  const length = string.length;
  if (map[length]) {
    map[length][string] = true;
  } else {
    map[length] = {
      [string]: true,
    };
  }

  return map;
}, {});

const insertSort = (array) => {
  if (array.length <= 1) {
    return;
  }

  for (let index = 1; index < array.length; index++) {
    let prev = index - 1;
    const item = array[index];
    while (0 <= prev && item < array[prev]) {
      array[prev + 1] = array[prev];
      prev--;
    }

    if (prev + 1 !== index) {
      array[prev + 1] = item;
    }
  }
};

const lengthSortedArray = Object.values(stringMap).map(Object.keys);
lengthSortedArray.forEach((array) => {
  insertSort(array);
  array.forEach((string) => {
    console.log(string);
  });
});
