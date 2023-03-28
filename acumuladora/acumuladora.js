let contador = 1;
let suma = 0
while(contador <= 5){
    let numero = parseFloat(prompt("Ingrese un numero"));
    suma = suma + numero;
    contador++
}
console.log("La suma es: ", suma)