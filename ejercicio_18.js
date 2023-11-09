function cambiarVocales(string, vocalNueva) {
    const vocales = "aeiouAEIOU";
    let nuevaCadena = "";
    for (let i = 0; i < string.length; i++) {
        if (vocales.includes(string[i])) {
            nuevaCadena += vocalNueva;
        } else {
            nuevaCadena += string[i];
        }
    }
    return nuevaCadena;
}

// Ejemplo de uso
let stringEjemplo = "hola mundo";
let vocalNuevaEjemplo = "a";
let resultado = cambiarVocales(stringEjemplo, vocalNuevaEjemplo);
console.log(resultado);