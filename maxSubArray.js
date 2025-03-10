let arr = [1, 4, 2, 5, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let n = [];
  for (let j = i; j < arr.length; j++) {
    n.push(arr[j]);
    let length = n.length;
    if (length % 2 != 0) {
      for (let k = 0; k < n.length; k++) {
        sum += n[k];
      }
    }
  }
}
console.log(sum);
