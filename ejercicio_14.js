function encontrarMinimo(array) {
    return Math.min(...array);
}

function encontrarMaximo(array) {
    return Math.max(...array);
}

function calcularMedia(array) {
    let sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}

function obtenerEstadisticas(array) {
    let min = encontrarMinimo(array);
    let max = encontrarMaximo(array);
    let media = calcularMedia(array);
    return {
        min: min,
        max: max,
        media: media
    };
}

let numeros = [1, 2, 3, 4, 5];
let estadisticas = obtenerEstadisticas(numeros);

console.log(estadisticas);