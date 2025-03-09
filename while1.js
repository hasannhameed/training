/* Print the following series 
       1 4 9 16 25 36 to n. Note print all the numbers in a seperate line*/
let number = 1;
let count = 2;
while (n > 0) {
  console.log(number);
  number = number + 1;
  number = number + count;
  count = count * 2;
  if (number > n) {
    break;
  }
}
console.log("hello");
