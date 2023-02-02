// Funciones (instrucciones que realizan una accion)

// Declaracion de Funcion
// creamos la funcion
function sumar() { // () se colocan los argumentos de la funcion
console.log(10 + 10);
}  // { } lo que va dentro se le conoce como el cuerpo de una funcion

// mandamos a llamar la funcion
sumar();

//  Expresion de la funcion
const sumar2 = function(){
    console.log(3+3)
}
sumar2()

// IIFE no necesitan llamarse xk se llaman ellas mismas son utiles para proteger que no se mesclen las variables
(function(){
    console.log('Esto es una funcion')
}())// para mandarla a llamar solo se ponen estos ()