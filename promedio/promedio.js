let suma = 0;
let contador = 0;
let numero = parseFloat(prompt("Ingrese un numero"));

while(numero != 0){
    numero = parseFloat(prompt("Ingrese un numero"));
    suma = suma + numero;
    contador++
}
let promedio = suma / contador;
console.log("El promedio de los", numero, "numeros es", promedio);
