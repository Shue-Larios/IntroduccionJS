// API moderna de JS  Notification

// cuando quiera seleccionar algo del html siempre iniciar con document
// querySelector la opcion mas usada hoy en dia para seleccionar contenido html
// como en css seleccionamos el id q es #boton
// hay que crear una variable para no estar escribiendo el codigo todo el tiempo (document.querySelector('#boton'))
const boton = document.querySelector('#boton');

// addEventListener nos va a permitir registrar un evento a la variable
// hay que pasarle dos valores el primero el evento que vamos a usar
boton.addEventListener('click', function(){ // cuando le doy clic se ejecuta
   Notification.requestPermission() // preguntamos que le de permiso de notificacion en el navegador este es el api notification
   .then(resultado => { // lo hacemos para leer el permiso si se lo dio el usuario 
    console.log("El Resultado es:", resultado)
   })
}); 

// si esta como grantedes que el usuario permitio las notificaciones
// si es denied es xk el usuario denego las notificaciones

if(Notification.permission == 'granted') { // esto quiere decir que el usuario acepto recibir notificaciones
    new Notification("Esta es una notificacion", { // creamos una nueva notificacion toma dos valores el primero es el titulo de la notificacion
        // el segundo es un objeto con algunas opciones
        icon: "img/ccj.png", // icon se escribe asi xk es de la api y es para poner un icono
        body: 'Codigo con Shue' // es el texto de la notificacion
    })
}