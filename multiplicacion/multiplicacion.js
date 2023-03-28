let numero = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
let contador = 1;
let resultado = 0;

while(contador <= numero2){
    resultado = resultado + numero
    contador++
}
console.log("El resultado de la multiplicacion es", resultado);