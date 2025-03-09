arr=[-1, -2, -7, -2, -6];
length = arr.length-1;
let min = Infinity;
for (let i = 0; i < length; i++){
    if (arr[i] < min) {
        min =arr[i];
    }
}
console.log(min);