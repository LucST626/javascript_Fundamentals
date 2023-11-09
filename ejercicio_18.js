function cambiarVocales(string, vocalNueva) {
    const vocales = /[aeiou]/gi;
    return string.replace(vocales, vocalNueva);
}

let stringEjemplo = "hola mundo";
let vocalNuevaEjemplo = "a";
let resultado = cambiarVocales(stringEjemplo, vocalNuevaEjemplo);
console.log(resultado);