const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let inputArray = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(
  (() => {
    const array = [...new Set(inputArray)];
    array.sort((prev, cur) => {
      if (prev.length === cur.length) {
        for (let index = 0; index < prev.length; index++) {
          const prevCharCodeAt = prev.charCodeAt(index);
          const curCharCodeAt = cur.charCodeAt(index);

          if (prevCharCodeAt !== curCharCodeAt) {
            return prevCharCodeAt - curCharCodeAt;
          }
        }
      }
      return prev.length - cur.length; // 길이별로 오름차순 정렬
    });
    return array.join("\n");
  })()
);
