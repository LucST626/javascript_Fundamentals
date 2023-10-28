function capitalizarPrimeraLetra(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

let texto = "hola mundo";
let resultado = capitalizarPrimeraLetra(texto);
console.log(resultado)