/* Print the following series 
       1 4 9 16 25 36 to n. Note print all the numbers in a seperate line*/
let number = 1;
let n = 49;
let pattern_number = 1;
while (n > 0) {
  if (number == 1) {
    console.log(1);
  }
  number = number + 2;
  pattern_number = pattern_number + number;

  if (pattern_number < n) {
    console.log(pattern_number);
  }
  n--;
}
