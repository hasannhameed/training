let arr = [1, 2, 3, 4, 5];
let ans = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    ans.push(arr[i]);
  }
}
console.log(ans);
