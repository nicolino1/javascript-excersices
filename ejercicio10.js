let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

let arr2 = [];

arr = arr.map((elem) => {
    !arr2.find((elem2)=> elem2 == elem) && arr2.push(elem);
})

console.log(arr2)