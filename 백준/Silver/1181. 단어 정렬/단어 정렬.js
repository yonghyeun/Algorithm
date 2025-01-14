const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [N, ...inputArray] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(
  (() => {
    const array = [...new Set(inputArray)];
    array.sort((prev, cur) => {
      if (prev.length === cur.length) {
        for (let index = 0; index < prev.length; index++) {
          if (prev.charCodeAt(index) === cur.charCodeAt(index)) {
            continue;
          }
          return prev.charCodeAt(index) - cur.charCodeAt(index);
        }
      }
      return prev.length - cur.length; 
    });
    return array.join("\n");
  })()
);