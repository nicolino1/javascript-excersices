let str = "origin";

 str = str.split("").filter((elem)=> elem !== "o" && elem !== "i" && elem !== "a" && elem !== "e" && elem !== "u").join("");

console.log(str);