// strings o cadenas de texto 
const producto ="Monitor de 20 pulgadas" // la que mas se utiliza es esta las otras dos casi no

const producto1 ="Monitor dde 20\" "; // si mi enunciado lleva comillas dobles o sensillas se pone \ ants para q lo detecte

const producto2 = String('Monitor de 30 pulgadas')// aca le decimos q la variable va a utilizar el constructor string

const producto3 = new String('Monitor de 50 pulgadas');

const tweet = 'Aprendiendo JavaScript con el curso de desarrollo we completo';

// console.log(producto.length) console.log es una funcion porque le agrego la variable si a la variable le agrego 
//.length o algo mas es un metodo y me dice cuantos caracteres tiene la variable


/*indexof indica en que posicion se encuentra un texto q ando buscando si es -1 es xk no lo encontro
console.log (tweet.indexOf('JavaScript')); 
console.log (tweet.indexOf('Tablet')); */


// length para la extension console.log(producto.length);


// console.log(producto2);
// console.log(producto3); //lo manda a la consola del navegador 
// console.log (tweet)

//includes (reporta true o false)
console.log (tweet.includes('JavaScript'));
console.log (tweet.includes('Tablet'));