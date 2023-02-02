// Switch es mejor para revisar multiples condiciones

const MetodoPago = "Efectivo";

switch (MetodoPago){
    case "Tarjeta": // lo que esta despues de los dos puntos es lo que se va a ejecutar 
         console.log("Pagaste con tarjeta");
         break; // hasta aca termina de ejecutarse 
    case "Cheque":  
         console.log("Pagaste con Cheque");
         break;  
    case "Efectivo":  
            console.log("Pagaste con Efectivo");
        break;  
default: { // es por defaul y se va a ejecutar cuando no es como el Else
    console.log("No lograste hacer el pago");
} 
}