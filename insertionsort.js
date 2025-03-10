let arr = [4, 3, 2, 5, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  let j = i - 1;
  let key = arr[i];
  while (j >= 0 && key < arr[j]) {

    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
console.log(arr);
