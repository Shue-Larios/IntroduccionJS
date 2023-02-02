// Funciones que retornan valores 
/*
function sumar(n1,n2){
return n1 + n2;
}

const resultado = sumar(2,3);
console.log(resultado) */


// Com un carrito con impuesto
let total = 0;

function AgregarCarrito(precio){
    return total += precio; // += es una forma de hacer incrementos
}

total = AgregarCarrito(200);
total = AgregarCarrito(400);
total = AgregarCarrito(600);

function CalcularImpuesto(total){
    return 1.15 * total;
}

const TotalApagar = CalcularImpuesto(total);

console.log(total);

console.log(`El total a pagar es: ${TotalApagar}`);