// Object Methods

// "use strict"; // Correr JS en modo estricto se pone en la primer linea
//Objeto
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

Object.freeze(producto); // congela el objeto para no ser modificado

producto.imagen = "imagen.jpg";

console.log(producto)

console.log(Object.isFrozen(producto)) // para saber si un objeto esta sellado

Object.seal(producto); // permite que el objeto pueda ser modificado nada mas