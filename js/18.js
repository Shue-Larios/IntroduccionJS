// Declaracion de Funcion
// numero1 = 0 se conoce como parametros por defaul es cuando un parametro no tiene dato agarra el defaul
function sumar(numero1 = 0, numero2 = 0) { // (numero1, numero2) son parametros
    console.log(numero1 + numero2);
    } 
    sumar(10,10); // () son argumentos o valores reales
    sumar(3,3);//reutilizando la funcion
    sumar(6,3);
    sumar(1,2);
 


    //  Expresion de la funcion
    const sumar2 = function(n1, n2){
        console.log(n1 + n2)
    }
    sumar2(5,10);
    sumar2(7,10);

