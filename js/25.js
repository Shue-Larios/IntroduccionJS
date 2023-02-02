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


    // ForEach puede ser utilizado unicamente en arreglos
    // ForEach se ejecuta una ves por cada elemento no hay q decirle cuantas vcs se ejecute
// carrito.forEach(function(producto){
//     console.log(producto.nombre) // muestra todos los datos del arreglo
// })

// ForEach utilizando Arrow Function
// carrito.forEach((producto) =>{
//     console.log(producto.precio) // muestra todos los datos del arreglo
// })


    // Map puede ser utilizado unicamente en arreglos
    // carrito.map((producto) =>{
    //     console.log(producto.nombre) // muestra todos los datos del arreglo
    // })
    

// cuando quiera interar sobre un arreglo y mostrar los elementos en pantalla utiliza el ForEach
// Si quiero hacer un nuevo arreglo entoncs utilizo map

const arreglo1 = carrito.forEach((producto) =>{ console.log(producto.nombre) // muestra todos los datos del arreglo
})

const arreglo2 = carrito.map((producto) =>{ (producto.nombre) // Crea un nuevo arreglo con lo q le diga en este caso producto.nombre
})

console.log(arreglo1);
console.log(arreglo2);
