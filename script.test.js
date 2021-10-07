const { expect } = require("@jest/globals")


const ejercicio1 = (cadena) => {
    cadena = cadena.replace(cadena[0], cadena[0].toUpperCase());
    return cadena;
}

const ejercicio2 = (cadena) => {
    cadena = cadena.replace(cadena[cadena.length-1], cadena[cadena.length-1].toUpperCase());
    return cadena;
}

const ejercicio3 = (cadena) => {
    let result;

    cadena.length % 2 !== 0 ? 
        result = cadena.replace(cadena[Math.floor((cadena.length/2))], cadena[Math.floor((cadena.length/2))].toLocaleUpperCase()) 
        : result = cadena;
    return result;
}

const ejercicio4 = (arr) => {
    let result;

    arr.map((element) => { if(element == "baz")  result= element});
    return result;
}

const ejercicio5 = (arr) => {
    arr.splice(0, arr.length);
    return arr.length;
}


test('ej1: first letter to uppercase', () => {
    expect(ejercicio1("str")).toBe("Str");
})

test('ej2: last letter to uppercase', () => {
    expect(ejercicio2("str")).toBe("stR");
})

test('ej3: letter in the middle to uppercase, string odd', () => {
    expect(ejercicio3("javascripts")).toBe("javasCripts");
})

test('ej4: return an element of the array', () => {
    expect(ejercicio4(["arr", "baz", "json"])).toBe("baz");
})

test('ej5: return a empty array', () => {
    expect(ejercicio5(["arr", "baz", "json"])).toBe(0);
})