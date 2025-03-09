let n = 5;

for (let i = n; i > 0; i--) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
}

for (let i = 1; i <= n; i++) {
  let str2 = "";
  for (let j = 0; j < i; j++) {
    str2 += "*";
  }
  console.log(str2);
}
