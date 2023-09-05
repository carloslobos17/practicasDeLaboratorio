let frutas = ['banana', 'manzana', 'pera']

console.log(frutas[2])

for(let fruta of frutas){
    console.log(fruta)
}

frutas.push('piña')
frutas.pop()
frutas.unshift('Melocoton')
frutas.reverse()
frutas.indexOf('')
console.log(frutas.indexOf('manzana', 0))
frutas.forEach( i => console.log(i))
frutas.splice(0, 1)




let numeros = []
let otrosNumeros = []
let arrayFinal = []
for(let i = 1; i <= 100; i++){
    let mensaje = `El valor es: ${i}`
    
    numeros.push(mensaje)

}

for (let i = 101; i <= 200; i++){
    let mensaje = `El valor es: ${i}`
    otrosNumeros.push(mensaje)
}

arrayFinal = [...numeros, ...otrosNumeros]

arrayFinal.forEach( (i) => {
    console.log(i)
} )


let persona = {
    nombre: 'saul',
    edad: '23',
    carrera: 'software'
}

let persona2 = {
    nombre: 'saul2',
    edad: '22',
    carrera: 'software2'
}

let persona3 = {
    nombre: 'saul3',
    edad: '20',
    carrera: 'software3'
}

let arrayObjetos = [persona, persona2, persona3]

console.log(arrayObjetos[1].edad)

console.log(arrayObjetos[2].edad)