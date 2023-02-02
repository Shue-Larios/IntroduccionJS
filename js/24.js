// For Loops ejecutan codigo hasta que se deje de cumplir o se cumpla una condicion

// For Loop
 // i = 0;es el inicio de la variable y el ciclo terminara hasta que se cumpla i < 10
 // i++ incrementa en 1 en 1
// for ( let i = 0; i < 10; i ++ ){ 
// console.log(i)
// }

//Buscar numero par con For Loop e If
// for ( let i = 1; i <= 100; i ++ ){ 
//     if( i % 2 === 0){ // el numero entre 2 es igual a 0 entonces es par 
// console.log(`El numero es par ${i}`);
//     }else{
//         console.log(`El numero es impar ${i}`); 
//     }
//     }

// for para recorrer un Arreglo con objetos 
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

// // For que recorre todo el carrito
// for(i = 0; i < carrito.length; i++){ // carrito.length va a ejecutar el for si hay uno o mas datos en el arreglo
// console.log(carrito[i].nombre); // nos va a mostrar solo el nombre
// } 



// While loop se ejecuta mientras una condicion sea evaluada como verdadera
// let i = 1; // Valor inicial
// while( i <= 100){ // Condicion ciclo termina mientras esto sea verdadero
//     if( i % 2 === 0){ // el numero entre 2 es igual a 0 entonces es par 
//       console.log(`El numero es par ${i}`);
//         }else{
//             console.log(`El numero es impar ${i}`); 
//         }
//     i++; // aca ponemor el incremento
// }



// While loop para recorrer el carrito
// let i = 0;
// while ( i < carrito.length){
//     console.log(carrito[i].nombre)
//  i++;
// }





// // Do While loop
let i = 0; // valor inicial 

do {
 console.log(i);
 i++; // en la parte dl DO vamos a poner el aumento 
} while(i < 10);  // Condicion ciclo termina mientras esto sea verdadero


// Do While loop para recorrer el carrito
let i = 0;
 do {
console.log(carrito[i].nombre)
i++;
 } while (i < carrito.length);