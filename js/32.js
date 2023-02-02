// Async / Await con dos ejecutandose a la ves
// nos permite ejecutar un codigo sin esperar a que otro proceso termine 
// nos muestra el msj dl codigo no se bloquea y sigue esperando el settimeout para mostrar el otro mensaje

function descargarNuevosClientes(){
    return new Promise( (resolve) => {
console.log("Descargando Clientes... Espere...")

setTimeout(() => {
    resolve('Los clientes fueron Descargados')
}, 5000);
    });
    }


    // Segunda funcion con Async
    function descargarUltimosPedidos(){
        return new Promise( (resolve) => {
    console.log("Descargando Pedidos... Espere...")
    
    setTimeout(() => {
        resolve('los pedidos fueron Descargados')
    }, 3000);
        });
        }


async function app(){ // con la palabra async decimos que es una funcion asincrona
    try {
        // asi se pondrian las dos lineas si descargarUltimosPedidos() dependiera de descargarNuevosClientes()
        // const clientes =await descargarNuevosClientes(); // le colocamos await para decirle donde esta el promise
        // const pedidos = await descargarUltimosPedidos(); 
        // console.log(clientes);
        // console.log(pedidos);

// con promise.all vamos a ganar en performan xk  se van a ejecutar las dos al mismo tiempo
    const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]) // ponemos [] como arreglo para poner todas las funciones que queremos ejecutar
// nos va a devolver el resultado como arreglo para ver mas especifico ponemos la posicion del arreglo [0] 
    console.log(resultado[0]);
    console.log(resultado[1]);

    } catch (error) {
        console.log(error);
    }

}

app()
