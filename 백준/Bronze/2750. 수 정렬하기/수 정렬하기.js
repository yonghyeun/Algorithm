const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [_, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = inputs.map((item) => Number(item));

// bubble sort

// const bubbleSort = () => {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     for (let j = 0; j < arr.length - 1 - i; j += 1) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// };

const selectionSort = () => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let MIN_INDEX = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[MIN_INDEX]) {
        MIN_INDEX = j;
      }
    }

    if (MIN_INDEX !== i) {
      const temp = arr[MIN_INDEX];
      arr[MIN_INDEX] = arr[i];
      arr[i] = temp;
    }
  }
};

selectionSort();
console.log(arr.join('\n'));