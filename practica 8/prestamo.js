class Prestamo{
    constructor(vhs, prestamista,  diaEntrega, diaRgreso){
    this.vhs =   vhs
    this.prestamista = prestamista 
    this.diaEntrega = diaEntrega 
    this.diaRgreso = diaRgreso 
    }

    obtenerVhs(){
        return this.vhs
    }

    obtenerPrestamista(){
        return this.prestamista
    }

    obtenerEntrega(){
        return this.diaEntrega
    }

    obtenerRegreso(){
        return this.diaRgreso
    }
}

export default Prestamo