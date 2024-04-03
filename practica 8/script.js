import VHS from "./vhs.js"
import Prestamo from "./prestamo.js"

const vhs1 = new VHS("Viernes 13", "1 h, 35m", "Jason Voorhees" )
console.log(vhs1.obtenerNombre());
console.log(vhs1.obtenerDuracion());
console.log(vhs1.obtenerProtagonista());

const diaEntrega = new Date(2024, 2, 14)
const diaRgreso = new Date(2024, 4, 17)

const prestamo1 = new Prestamo(vhs1, "Samantha", diaEntrega, diaRgreso)
console.log(prestamo1.obtenerVhs().obtenerNombre());
