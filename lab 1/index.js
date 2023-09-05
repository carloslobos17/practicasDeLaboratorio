//ejercicio 1

let edad = prompt("introduzca su edad:")

if(edad > 18 && edad <= 100){
    alert("el usuario es mayor de edad")
}else if(edad < 18 && edad >= 1){
    alert("el usuario es menor de edad")
}else if(edad == 18){
    alert("el usuario tiene 18")
}else if(edad > 100){
    alert("el usuario es centenario")
}else if(edad <= 0){
    alert("edad invalida")
}

//ejercicio 2
let i = 1;
let suma = 0;
while(i  <=100){
    suma += i;
    i++;
}

alert(suma)

//ejercicio 3

let num = prompt("escriba un numero:")

for(j = 1; j <=10; j++){
    alert(num + ' x ' + j + ' es igual a: ' + (num * j))
}   