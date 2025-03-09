function check() {
  n = 153;
  let temp = n;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit ** 3;
    n = Math.floor(n / 10);
  }
  return sum === temp;
}

let ans = check();
console.log(ans);
