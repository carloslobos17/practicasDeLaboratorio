class Socio {

    constructor (nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.libros = [];
    }

}

class Libro{

    constructor (titulo, autor, estado){
        this.titulo = titulo
        this.autor = autor
        this.estado = disponibilidad
    }

    verEstado(){
        return this.estado
    }
    prestar(){
        return this.estado = "no disponible"
        }
}

prestarLibroSocio(libro){
    if(libro.verEstado == "Disponible"){
        libro.prestar()
    }else{
        console.log("libro prestado");
    }
}

const persona1 = new Socio ("juan", "12938017238")
const persona2 = new Socio ("Jaime", "192619273")

const libro1 = new Libro ("Edipo Rey", "Sofocles", "Si disponible");
const libro2 = new Libro ("El quijote", "Miguel de Cervantes", "No disponible");