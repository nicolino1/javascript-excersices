const numberList = (num) => {
    let list;

    switch(num) {
        case 1: list = "1,2,3,4,5,6,7,8,9,10";
        break;
        case 2: list = "2,3,4,5,6,7,8,9,10";
        break;
        case 3: list = "3,4,5,6,7,8,9,10";
        break;
        case 4: list = "4,5,6,7,8,9,10";
        break;
        case 5: list = "5,6,7,8,9,10";
        break;
        case 6: list = "6,7,8,9,10";
        break;
        case 7: list = "7,8,9,10";
        break;
        case 8: list = "8,9,10";
        break;
        case 9: list = "9,10";
        break;
        case 10: list = "10";
        break;
    }

    return list;
}

console.log(numberList(2))