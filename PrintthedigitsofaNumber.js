/*N - 153 .
output:-
3
5
1 */

let n = 153;
let number;
while (n > 0) {
  number = n % 10;
  console.log(number);
  n = Math.floor(n / 10);
}
