//unir dos objetos con el Spread operator
//Objeto
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}
const medidas = {
    peso: '1kg',
    medida : '1m'
}
//Spread operator 
const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto);

