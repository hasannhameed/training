matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let ans = new Array(matrix[0].length)
  .fill(null)
  .map(() => new Array(matrix.length));
  
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    ans[i][j] = matrix[j][i];
  }
}
console.log(ans);
