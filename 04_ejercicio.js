// Definir la función sumar
function sumar(a, b) {
    return a + b;
  }
  
  // Definir la función restar
  function restar(a, b) {
    return a - b;
  }
  
  // Definir la función multiplicar
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Definir la función dividir
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "No se puede dividir entre cero";
    }
  }
  
  // Definir la función doble
  function doble(a) {
    return a * 2;
  }
  
  // Mostrar los resultados de las funciones por consola
  console.log("La suma es: " + sumar(4, 2));
  console.log("La resta es: " + restar(4, 2));
  console.log("La multiplicación es: " + multiplicar(4, 2));
  console.log("La división es: " + dividir(4, 2));
  console.log("El doble es: " + doble(4));