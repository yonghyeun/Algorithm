const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = inputs[0].split(' ').map((item) => Number(item));
const lines = inputs.slice(1).map((item) => Number(item));

const parametricSearch = () => {
  let low = 1;
  let high = Math.max(...lines);
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const count = lines.reduce((acc, curr) => acc + Math.floor(curr / mid), 0);

    if (count >= N) {
      result = mid; // 최대 길이 업데이트
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};

console.log(parametricSearch());