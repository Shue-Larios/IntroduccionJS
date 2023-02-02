// Promises son una promesa que refleja un valor que podra estar disponible ahora en un futuro o nunca
// resolve, reject son valores que se pasan de forma automatica en el promise
// resolve se va a ejecutar cuando nuestro promise se cumpla
// Reject cuando no se cumple el promise
const usuarioAutenticado =  new Promise( (resolve, reject) => {
    const auth =  true;

    if(auth) {
resolve('Usuario autenticado'); // el promise se cumple
    } else {
reject('Ingrese de nuevo'); // el promise NO se cumple
    }
});

usuarioAutenticado // para acceder al .then tengo q poner el nombre del promise
    .then( resultado => { // para acceder al resolve
console.log(resultado);
    })
    .catch( error => { // para acceder al reject el catch es usado en caso d error
        console.log(error);
    })

// En los Promises Existen 3 valores posibles
// Pending: no se ha cumplido pero tampoco se ha rechazado
// fulfilled: ya se cumplio el promise
// Rejected: se ha rechazado o no se pudo completar