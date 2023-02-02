// Metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el id: ${id}`);
    },
    pausar : function() {
        console.log("Pausando...");
    },
    CrearPlaylist: function(nombre) {
        console.log(`Creando la PlayList: ${nombre}`)
    },
    ReproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la PlayList: ${nombre}`)
    }
}

reproductor.BorrarCancion = function(id) {
    console.log(`Borrando cancion con el ID: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.BorrarCancion(20);
reproductor.CrearPlaylist('Regueton');
reproductor.ReproducirPlaylist('Regueton');

