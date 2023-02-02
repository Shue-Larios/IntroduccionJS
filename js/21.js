// Arrow Functions =>

//  Expresion de la funcion 
const sumar2 = (n1,n2) => {
    console.log(n1 +n2)
}
sumar2(5,10)

//sintaxis del Arrow Functions (va los parametros)
const aprendiendo = (tecnologia) => {
console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo("JavaScript");


// Arrow en arreglos
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
    
    // ForEach con Arrow Functions
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
    meses.forEach((mes) => {
        if (mes == 'Marzo') {
            console.log('Si Existe')
        }
    }); 
    
    /*
    // Includes no se puede usar un arrow functions
    const resultado = meses.includes('Marzo');
    console.log(resultado); */
    
    
    // Some ideal para arreglo con objetos 
    const resultado = carrito.some((producto) => {
        return producto.nombre == "Celular"
    })
    console.log(resultado);
    
    // Reduce va agarrar todos los numero y va a entregar un resultado
    const resultado = carrito.reduce((total, producto) => {
        return total + producto.precio
    },0) // aca indicamos en que numero va a comenzar
    console.log(resultado);
     

    // Filter sirve para obtener un elemento o todos menos uno 
    const resultado = carrito.filter((producto) => {
        return producto.precio > 400 // filtro para que muestre los productos mayores a 400
    });
    
    const resultado1 = carrito.filter((producto) => {
        return producto.nombre == 'Celular' // filtro para que muestre los productos con nombre celular
    });
    
    const resultado2 = carrito.filter((producto) => {
        return producto.nombre !== 'Celular' // filtro para que muestre los productos que no son celular
    });
    
    console.log(resultado); 
    console.log(resultado1);
    console.log(resultado2);
    