// POO Classes 
// Los nombres de las clases siempre van en mayuscula la primera como buena practica

class Producto {
 constructor(nombre, precio) { // aca es donde se colocan los parametros 
    this.nombre = nombre;
    this.precio = precio;
 } 
 formatearProducto () {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
}
}

const producto2 = new Producto("Monitor de 49", 800);
const producto3 = new Producto("Laptop", 300);



// Herencia como en la vida real hereda todos sus vienes
// extends quiere decir hereda para que pase no tiene q ver constructor hereda todo constructores metodos etc
class Libro extends Producto { 
  constructor(nombre,precio,isbn) { // se utiliza solamente si queremos agregar otro elemento en este caso ISBN
  super(nombre,precio); // se le pone constructor y super y se ponene los parametros a heredar del padre y usamos this para agregar uno mas
    this.isbn = isbn;
  }
  formatearProducto () {
    return `${super.formatearProducto()} y su ISBN es:${this.isbn}`; // volvemos a utilizar super para heredar lo que dice formatearProducto y agregar mas contenido
}

}
const libro = new Libro("JavaScript", 120, 9894541684646); 
console.log(libro.formatearProducto());



// console.log(producto2.formatearProducto());
// console.log(producto3.formatearProducto());
