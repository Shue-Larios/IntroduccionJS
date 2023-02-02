

// Arreglo con objetos y cada producto va hacer un objeto
const carrito = [
{ nombre: 'Monitor 20 pulgadas', precio : 500,},
{ nombre: 'Television 70 pulgadas', precio : 700,},
{ nombre: 'Tablet', precio : 300,},
{ nombre: 'Audifonos', precio : 200,},
{ nombre: 'Teclado', precio : 50,},
{ nombre: 'Celular', precio : 500,},
{ nombre: 'Bocinas', precio : 300,},
{ nombre: 'Laptop', precio : 800,},
];

/* ForEach se va a ejecutar al menos una ves por cada elemento que hay en el arreglo
const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
meses.forEach(function(mes) {
    if (mes == 'Marzo') {
        console.log('Si Existe')
    }
}); */

// esto de arriba se ejecuta mejor con un includes
// Includes 
/*
const resultado = meses.includes('Marzo');
console.log(resultado); */


// Some ideal para arreglo con objetos 
/*
const resultado = carrito.some(function(producto) {
    return producto.nombre == "Celular"
})
console.log(resultado); */

// Reduce va agarrar todos los numero y va a entregar un resultado
/*
const resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
},0) // aca indicamos en que numero va a comenzar
console.log(resultado); */

// Filter sirve para obtener un elemento o todos menos uno 
const resultado = carrito.filter(function(producto){
    return producto.precio > 400 // filtro para que muestre los productos mayores a 400
});

const resultado1 = carrito.filter(function(producto){
    return producto.nombre == 'Celular' // filtro para que muestre los productos con nombre celular
});

const resultado2 = carrito.filter(function(producto){
    return producto.nombre !== 'Celular' // filtro para que muestre los productos que no son celular
});

console.log(resultado); 
console.log(resultado1);
console.log(resultado2); 

