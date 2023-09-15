// //funcion de primer grado
// function saludar() {
//     console.log("hola mundo")
// }

// saludar()


// //funcion anonima
// const saludarAnonimo = function() {
//     saludar()
// }

// saludarAnonimo()

// //objeto
// const usuario ={
//     nombre: "carlos",
//     correo: "Sin agregar"
// }

// function agregarCorreo(nuevoCorreo) {
//     usuario.correo = nuevoCorreo
// }

// console.log(usuario)
// agregarCorreo("yea@gmail.com")

// let a = 5
// let b = 10 

// function suma() {
//     return a + b     
// }


// console.log(suma());


//usar return cuando se vayan a llamar cosas de afuera
// y las funciones anonimas no pueden llamarse antes de haberse creado las de primer grado si 

const suma = function(a, b){
    return a + b
}

console.log(suma(10, 10 ))

// con let se puede modificar la funcion anonima asi que es recomendable usar const

const multiplicacion = function suma(a, b) {
    return(b != 0) ? a + suma(a,b-1) : 0
}

console.log(multiplicacion(5, 2))

let numero = 0
while (numero <= 10) {
    console.log(numero)
    numero++
}

function contador(numero = 0) {
    if(numero >= 10){
        return
    }
    console.log(numero)
    contador(numero + 1)
}

console.log("funcion recursiva");
contador()

function media(datos) {
    function sumatoria(serie) {
        let suma = 0
        serie.forEach(numero => {
            suma += numero
        });
        return suma
    }
    return sumatoria / datos.lenght
}

function mediana(datos) {
    const largo = datos.lenght
}

const misDatos = [5, 6, 19, 3]

console.log(`la media de ${misDatos} es ${media(misDatos)}`);

