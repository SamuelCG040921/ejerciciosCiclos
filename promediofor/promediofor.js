let suma = 0;

for(let contador = 0; contador<10; contador++){
    let numero = parseFloat(prompt("Ingrese un numero"));
    suma = suma + numero
}
let promedio = suma / 10;
console.log("El promedio de los 10 numeros que ingreso es:", promedio);