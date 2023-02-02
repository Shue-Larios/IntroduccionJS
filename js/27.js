// POO forma antigua 

// Object Literal es mas estatico
const producto ={
    nombre: "Tablet",
    precio: 500
}
// console.log(producto)

// Object Constructor es mas dinamico
function Producto (nombre, precio, disponible) { // Como una clase
    this.nombre =  nombre;
    this.precio =  precio;
}

 // Prototype nos va a permitir crear funciones que solo se utilizan en un objeto en especifico 
 Producto.prototype.formatearProducto =  function () {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto("Monitor de 49", 800, true);
const producto3 = new Producto("Laptop", 300, false);

 

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

