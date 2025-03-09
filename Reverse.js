// Input
// n=123
// output
// 321

let n = 123;
let tracker;
let reverse = 0;
while (n > 0) {
  tracker = n % 10;
  reverse = reverse * 10 + tracker;
  n = Math.floor(n / 10);
}
console.log(reverse);
