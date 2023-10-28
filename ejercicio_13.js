let sumaTotal = 0; 

function sumarArray(array) {
    sumaTotal = array.reduce((acc, current) => acc + current, 0);
    return sumaTotal;
}

let numeros = [1, 2, 3, 4, 5]; 

sumarArray(numeros); 
console.log(sumaTotal);