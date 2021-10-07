let arr = ["foo", "bar", "baz", "qux", "origin"];
let result;

arr.map((element) => { if(element == "baz")  result= element});

console.log(result);