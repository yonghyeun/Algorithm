const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const N = +fs.readFileSync(filePath).toString().trim();

const createEmptySqaure = (N) =>
  Array.from(
    {
      length: N,
    },
    () => " ".repeat(N)
  ).join("\n");

const mergeText = (length, ...args) => {
  const result = [];

  for (let index = 0; index < length; index++) {
    let temp = "";
    for (let argsIndex = 0; argsIndex < args.length; argsIndex++) {
      temp += args[argsIndex][index];
    }
    result.push(temp);
  }

  return result.join("\n");
};

const solution = (N) => {
  if (N === 1) {
    return "*";
  }

  const rest = solution(N / 3).split("\n");
  const center = createEmptySqaure(N / 3).split("\n");

  return [
    mergeText(N / 3, rest, rest, rest),
    mergeText(N / 3, rest, center, rest),
    mergeText(N / 3, rest, rest, rest),
  ].join("\n");
};

console.log(solution(N));