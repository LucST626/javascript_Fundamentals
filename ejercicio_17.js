function modificarString(cadena) {
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        if (i % 2 === 0) {
            resultado += cadena[i].toLowerCase();
        } else {
            resultado += cadena[i].toUpperCase();
        }
    }
    return resultado;
}

let texto = "hola mundo";
let resultado = modificarString(texto);
console.log(resultado);