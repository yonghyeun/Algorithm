const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

/* 문제 받기 
배열을 받은후 정렬하여 question 배열에 담음
*/
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const T = +inputs[0];
const questions = [];
for (let i = 1; i <= T; i += 1) {
  const arr = inputs[i * 2].trim().split(' ').map(Number);
  questions.push(arr.sort((pre, cur) => pre - cur));
}

for (let idx = 0; idx < T; idx += 1) {
  const arr = questions[idx];
  const length = arr.length;
  const hash = arr.reduce((acc, value) => {
    acc[value] = true;
    return acc;
  }, {});
  let cnt = 0;

  for (let outter = 0; outter <= length - 2; outter += 1) {
    for (let inner = outter + 1; inner <= length - 1; inner += 1) {
      const start = arr[outter];
      const end = arr[inner];
      /* middle point 가 있으려면 distance 는 짝수 */
      const distance = end - start;
      if (distance % 2) continue;
      const middle = start + distance / 2;
      if (hash[middle]) {
        cnt += 1;
      }
    }
  }
  console.log(cnt);
}
