let arr = [1, 1, 7,7, 1, 7];
let result;

arr.map((element) => {
    let cont = 0;
    arr.map((element2) => element == element2 && cont++ );

    cont % 2 !== 0 && (result = element);
})

console.log(result)