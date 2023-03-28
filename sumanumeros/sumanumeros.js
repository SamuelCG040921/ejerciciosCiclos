let numero = parseFloat(prompt("Ingrese el numero hasta el que quiere sumar"));
let contador = 0;
let suma = 0;

while(contador <= numero){
    suma = contador + suma
    contador++
}
console.log("La suma de los numeros hasta el que usted eligio es", suma);