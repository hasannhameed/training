let nums = [1, 2, 3, 4];
let arr = [];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  arr.push((sum += nums[i]));
}
console.log(arr);
