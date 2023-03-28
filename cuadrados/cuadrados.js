let suma = 0;
let contador = 1;
let numero = parseFloat(prompt("Ingrese el numero que desee"));

while(contador <= numero){
    suma = suma + contador ** 2;
    contador++
}
console.log("La potencia de", numero, "es", suma);

