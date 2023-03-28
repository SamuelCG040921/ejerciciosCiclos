let numero = parseFloat(prompt("Ingrese el numero que desea elevar a una potencia"));
let potencia = parseFloat(prompt("Ingrese el numero de veces que desea elevarlo"));
let contador = 1;

while(contador <= potencia){
    contador = numero ** potencia;
    console.log(numero, "^", potencia, "=", contador);
    contador++
}
