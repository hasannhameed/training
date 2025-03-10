let arr = [3, 4, 2, 5, 6, 7, 1];
let max = -Infinity;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  if (arr[i] > max) {
    max = arr[i];
  }
}

let n = (max * (max + 1)) / 2;
let missingNumber = n - sum;
if (missingNumber == 0) {
  console.log(max + 1);
} else {
  console.log(missingNumber);
}
