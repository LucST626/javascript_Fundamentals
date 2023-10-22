// Definir la función calcularPrecioConIva
function calcularPrecioConIva(precioSinIva) {
    var iva = 0.21;
    var precioConIva = precioSinIva * (1 + iva);
    console.log(`El precio con IVA de un producto con precio sin IVA ${precioSinIva} es ${precioConIva}`);
    return precioConIva;
  }
  
  var precioSinIva = 100;
  calcularPrecioConIva(precioSinIva);