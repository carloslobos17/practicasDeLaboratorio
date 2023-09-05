let array1 = [];
let array2 = [];

for (let i = 0; i <= 100; i++) {
    array1.push(i)
    
}

for (let i = 101; i <= 200; i++) {
    array2.push(i)
    
}

let arraysUnidos = array1.concat(array2)
let sum = arraysUnidos.reduce((previous, current) => current += previous);
let avg = sum / arraysUnidos.length;

console.log(array1)
console.log(array2)
console.log(arraysUnidos)
console.log(avg);