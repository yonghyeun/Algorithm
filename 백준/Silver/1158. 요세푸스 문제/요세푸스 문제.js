const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [N, K] = fs.readFileSync(filePath).toString().split(' ').map(Number);

function solution() {
  if (N === 1) {
    console.log('<1>');
    return;
  }

  const arr = Array.from({ length: N }, (_, idx) => {
    return {
      value: idx + 1,
      next: null,
      prev: null,
    };
  });

  /* 양방향 링크드 리스트 형태로 연결 */
  for (let idx = 1; idx <= N - 2; idx += 1) {
    arr[idx].next = arr[idx + 1];
    arr[idx].prev = arr[idx - 1];
  }
  arr[N - 1].next = arr[0];
  arr[N - 1].prev = arr[N - 2];

  arr[0].next = arr[1];
  arr[0].prev = arr[N - 1];

  const result = [];
  let cnt = 0;

  /* K 번째 사람 이미 사망 처리 하기 */

  let target = arr[K - 1];
  target.prev.next = target.next;
  target.next.prev = target.prev;

  result.push(target.value);
  cnt += 1;

  while (cnt < N) {
    for (let step = 0; step < K; step += 1) {
      target = target.next;
    }

    target.prev.next = target.next;
    target.next.prev = target.prev;
    result.push(target.value);
    cnt += 1;
  }

  console.log('<' + result.join(', ') + '>');
}

solution();
