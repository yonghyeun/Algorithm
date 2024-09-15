const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [string, bomb] = fs.readFileSync(filePath).toString().trim().split('\n');

let stack = [];

for (let s of string) {
  stack.push(s);

  if (
    s === bomb[bomb.length - 1] &&
    stack.slice(-bomb.length).join('') === bomb
  ) {
    stack.splice(-bomb.length, bomb.length);
  }
}

if (stack.length === 0) {
  console.log('FRULA');
} else {
  console.log(stack.join(''));
}
