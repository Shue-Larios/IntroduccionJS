// Objetos es lo que mas se utiliza en JS

//como se dan las variables normalmente
const nombreProducto = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;

//como es en un objeto
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

//para agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg"


// para eliminar propiedad del objeto
delete producto.disponible;


console.log(producto);

console.log(producto.precio) // sirve para acceder al dato que queremos utilizar que esta dentro de un objeto