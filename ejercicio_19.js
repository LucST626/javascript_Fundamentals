const cadena = "xaaxxaxaaaxxaa"
function cuentaCosas(string){
console.log(string)
let numero_a = 0
let numero_x = 0
for (var i =0; i< string.length; i++){
    console.log(string[i])
if (string[i] === "a"){
        numero_a++
    } else {
        numero_x++
    }         
}
  console.log (numero_a, numero_x)
  return [numero_a, numero_x]
}
const cuantas_cosas_hay = cuentaCosas(cadena)
console.log(cuantas_cosas_hay)
