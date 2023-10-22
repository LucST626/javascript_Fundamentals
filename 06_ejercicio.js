// Definir la función celsiusToFahrenheit
function celsiusToFahrenheit(gradosCelsius) {
    var gradosFahrenheit = (gradosCelsius * 1.8) + 32;
    console.log(`${gradosCelsius} grados Celsius son ${gradosFahrenheit} grados Fahrenheit`);
    return gradosFahrenheit;
  }
  //llamar la funcion
  var temperaturaCelsius = 50;
  celsiusToFahrenheit(temperaturaCelsius);