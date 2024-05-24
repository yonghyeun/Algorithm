function removeKthElementSplice(arr, k) {
  arr.splice(k - 1, 1);
  return arr;
}

function removeKthElementNewArray(arr, k) {
  const b = arr[k];
  for (let idx = k + 1; idx <= arr.length - 1; idx += 1) {
    arr[idx - 1] = arr[idx];
  }
  return arr.filter((_, index) => index !== k - 1);
}

function benchmark() {
  const N = 1000000;
  const K = Math.floor(N / 2);

  // Create the array
  const array = Array.from({ length: N }, (_, i) => i + 1);

  console.time('Splice Method');
  let array1 = [...array];
  const a = removeKthElementSplice(array1, K);
  console.timeEnd('Splice Method');

  console.time('New Array Method');
  let array2 = [...array];
  removeKthElementNewArray(array2, K);
  console.timeEnd('New Array Method');
}

benchmark();
