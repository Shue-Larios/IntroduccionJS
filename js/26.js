// This

const reservacion = {
    nombre: 'Rene',
    apellido: "Larios",
    total: 5000,
    pagado: false,
    informacion : function (){
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es: ${this.total}`);
    }// this va hacer referencia sobre el objeto que se esta mandando a llamar esta funcion
}

reservacion.informacion();