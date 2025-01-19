const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [numOfTestCase, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const candidates = [];
for (let i = 0; i < inputs.length; i++) {
  const tempArray = [];
  const numOfCandidates = Number(inputs[i]);

  for (let j = i + 1; j <= i + numOfCandidates; j++) {
    tempArray.push(inputs[j].split(" ").map(Number));
  }
  i += numOfCandidates;
  candidates.push(tempArray);
}

let results = Array.from({ length: numOfTestCase }, () => 1);

candidates.forEach((array, index) => {
  const sortedArray = array.sort((prev, cur) => prev[0] - cur[0]);
  let [_, secondMinimum] = sortedArray[0];

  sortedArray.slice(1).forEach(([_, second]) => {
    if (second < secondMinimum) {
      results[index]++;
      secondMinimum = second;
    }
  });
});

console.log(results.join("\n"));