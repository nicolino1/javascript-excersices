let str = "origin";

 str = "1" + str.split("").filter((elem)=> elem !== "o" && elem !== "i" && elem !== "a" && elem !== "e" && elem !== "u").join("1");

console.log(str);