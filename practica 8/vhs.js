class VHS{
    constructor(nombre, duracion, protagonista){
        this.nombre=nombre
        this.duracion=duracion 
        this.protagonista = protagonista
       
    }

    obtenerNombre(){
        return this.nombre
    }

    obtenerDuracion(){
        return this.duracion
    }

    obtenerProtagonista(){
        return this.protagonista
    }
}

export default VHS