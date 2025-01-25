const makeRandomArray = (length, delta = 1) =>
  Array.from({ length }, (_, idx) => idx).sort(() => delta - Math.random());

const insertSort = (array) => {
  for (let index = 1; index < array.length; index++) {
    const value = array[index];
    let i = index - 1;

    while (i >= 0 && array[i] > value) {
      array[i + 1] = array[i];
      i--;
    }

    if (i + 1 !== index) {
      array[i + 1] = value;
    }
  }

  return array;
};

const merge = (array, start, mid, end) => {
  let leftStart = start;
  let rightStart = mid + 1;
  const tempArray = [];

  while (leftStart <= mid && rightStart <= end) {
    if (array[leftStart] < array[rightStart]) {
      tempArray.push(array[leftStart]);
      leftStart++;
    } else {
      tempArray.push(array[rightStart]);
      rightStart++;
    }
  }

  while (leftStart < rightStart) {
    tempArray.push(array[leftStart]);
    leftStart++;
  }

  while (rightStart <= end) {
    tempArray.push(array[rightStart]);
    rightStart++;
  }

  for (let i = start; i <= end; i++) {
    array[i] = tempArray[i - start];
  }
};

const mergeSort = (array, start, end) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);
  merge(array, start, mid, end);

  return array;
};

// const test = () => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`Test 2**${i}`);

//     console.group("worst case , 역정렬 된 경우");
//     console.time(`Insert Sort 2**${i}`);
//     insertSort(makeRandomArray(2 ** i, 0));

//     console.timeEnd(`Insert Sort 2**${i}`);

//     console.time(`Merge Sort 2**${i}`);
//     mergeSort(makeRandomArray(2 ** i, 0), 0, 2 ** i - 1);
//     console.timeEnd(`Merge Sort 2**${i}`);
//     console.groupEnd();

//     // console.group("best case , 정렬 된 경우");
//     // console.time(`Insert Sort 2**${i}`);
//     // insertSort(makeRandomArray(2 ** i, 1));

//     // console.timeEnd(`Insert Sort 2**${i}`);

//     // console.time(`Merge Sort 2**${i}`);
//     // mergeSort(makeRandomArray(2 ** i, 1), 0, 2 ** i - 1);
//     // console.timeEnd(`Merge Sort 2**${i}`);
//     // console.groupEnd();
//   }
// };

// test();

const makeArray = (startNumber, length) =>
  Array.from({ length }, (_, idx) => startNumber + idx);

const recordTime = (array, sortFunction, ...args) => {
  console.time(sortFunction.name);
  sortFunction([...array], ...args);
  console.timeEnd(sortFunction.name);
};

const getPatternedArray = (length) => {
  const shuffledArray = makeArray(0, length).sort(() => 0.5 - Math.random());
  const patternedArray = [];
  const maxRunLength = 32;

  let index = 0;
  while (index < length) {
    // run의 길이에 랜덤성 부여

    const runLength = Math.min(Math.floor(Math.random() * 50), maxRunLength);

    // 일정 패턴을 주기 위해 0.5 의 확률로 오름차순, 내림차순으로 정렬

    const runArray = shuffledArray
      .slice(index, index + runLength)
      .sort((a, b) => (Math.random() > 0.5 ? a - b : b - a));

    patternedArray.push(...runArray);

    index = Math.min(index + runLength, length);
  }

  return patternedArray;
};

const testPatternedArrayExecutionTime = (length) => {
  const patternedArray = getPatternedArray(length);
  console.log(patternedArray);

  recordTime(patternedArray, insertSort);
  recordTime(patternedArray, mergeSort, 0, length - 1);
};
