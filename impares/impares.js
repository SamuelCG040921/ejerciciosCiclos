let contador = 0;
let cantidadNumeros = parseFloat(prompt("Ingrese el limite"));
while(contador<=100){
    if (contador % 2 != 0){
        console.log(contador, "es impar");
        cantidadNumeros++
    }
    contador++
}
console.log("La cantidad de numeros impares es", cantidadNumeros);