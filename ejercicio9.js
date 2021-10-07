let arr = [10, "20", 30, "40", 50];

arr = arr.map((elem) => {
    let result;
    (typeof(elem) == "string")  
        result = parseInt(elem)
    return result;})

console.log(arr);