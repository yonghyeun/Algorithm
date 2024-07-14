const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

let result = '';

const hanoi = (numOfDisk, from, to, aux) => {
  if (numOfDisk === 1) {
    result += `${from} ${to}\n`;
    return;
  }

  hanoi(numOfDisk - 1, from, aux, to);
  result += `${from} ${to}\n`;
  hanoi(numOfDisk - 1, aux, to, from);
};

const solution = () => {
  console.log(2 ** N - 1);
  hanoi(N, 1, 3, 2);
  console.log(result);
};

solution();