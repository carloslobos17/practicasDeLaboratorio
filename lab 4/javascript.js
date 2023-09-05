const usuarios = [
    {"name": "user1", "edad": 21, "carrera": "software", "year": 1},
    {"name": "user2", "edad": 20, "carrera": "medicina", "year": 2},
    {"name": "user3", "edad": 18, "carrera": "turismo", "year": 4},
    {"name": "user4", "edad": 29, "carrera": "diseño", "year": 1},
    {"name": "user5", "edad": 11, "carrera": "civil", "year": 5},
    {"name": "user65", "edad": 31, "carrera": "energias", "year": 3},
    {"name": "user143", "edad": 91, "carrera": "eletricidad", "year": 2},
    {"name": "user10", "edad": 21, "carrera": "fotografia", "year": 4},
    {"name": "user0", "edad": 29, "carrera": "periodismo", "year": 2},
    {"name": "user23", "edad": 21, "carrera": "civil", "year": 3}
];

// const usuariosFilter = usuarios.filter(user => {
//         return user.carrera == "software" && user.edad > 18
// })
// const usuariosCivil = usuarios.filter( user => {
//     return user.carrera == "civil"
// })

// console.log(usuariosFilter)
// console.log(usuariosCivil)

const usuariosMap = usuarios.map( user =>{
    return {
        "nombre": user.name,
        "edad": user.edad
    }
})

console.log(usuariosMap)
