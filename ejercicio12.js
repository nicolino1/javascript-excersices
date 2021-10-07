let str = "hola mundo desde javascript";

let arr = str.split(" ");

let arr2= []; 

arr.map((elem) => {arr2.push(elem), arr2.push("-")})

arr2.pop();

console.log(arr2)