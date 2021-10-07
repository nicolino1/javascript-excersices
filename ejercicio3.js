let cadena = "bar";
let result;


cadena.length % 2 !== 0 ? 
    result = cadena.replace(cadena[Math.floor((cadena.length/2))], cadena[Math.floor((cadena.length/2))].toLocaleUpperCase()) 
    : result = cadena;

console.log(result);