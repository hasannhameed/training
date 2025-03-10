let arr = [
  [1, 5],
  [7, 3],
  [3, 5],
];

let min = arr[0][0];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] < min) {
      min = arr[i][j];
    }
  }
}
console.log(min);
