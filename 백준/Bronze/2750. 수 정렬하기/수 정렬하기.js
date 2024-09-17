const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [_, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = inputs.map((item) => Number(item));

// bubble sort

const bubbleSort = () => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
};

bubbleSort();

console.log(arr.join('\n'));