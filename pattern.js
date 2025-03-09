let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "*";
  for (let j = 1; j < i; j++) {
    str += "*";
  }

  for (let k = n; k > i; k--) {
    str += " ";
  }

  for (let k = 0; k < i; k++) {
    str += "*";
  }
  console.log(str);
}
