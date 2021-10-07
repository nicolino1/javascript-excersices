let arr = [1,3,4,2,6,7,9,1,8];
let cont = 0;

arr.map((elem) => elem % 2 !== 0 && cont++);

console.log(cont)