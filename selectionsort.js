let arr = [64, 25, 12, 22, 11];

for (let i = 0; i < arr.length - 1; i++) {
  let min = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] <= arr[min]) {
      min = j;
    }
  }
  if (min != i) {
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}
console.log(arr);
