// fetch api el reemplazo de Ajax
// con Promises
function obtenerEmpleado() { // 
    // como buena practica poner el archivo o url en una variable
const archivo =  'json/empleados.json';
// funcion que nos va a permitir usar Fetch
fetch (archivo) 
    .then ( resultado => { // si esto es correcto debemos retornar un resultado y decir si es json o texto
        return resultado.json(); // retorna un json como funcion o metodo
    })
    .then ( datos => { // hacemos esto y nos muestra en el console log del json como arreglo xk arriba dijimos que era json sino nos muestra como texto
   
// para acceder a los elementos como arreglo
       const { empleados } = datos;
// para acceder a los elementos de forma individual
 empleados.forEach(empleado => {
     console.log(empleado.nombre)
 });
    })

}
obtenerEmpleado();


// Fetch api con Asyn / await

async function obtenerEmpleado() {
    const archivo =  'json/empleados.json';
    const resultado = await fetch(archivo);
    const datos =  await resultado.json();
    console.log(datos);
    
}
obtenerEmpleado();