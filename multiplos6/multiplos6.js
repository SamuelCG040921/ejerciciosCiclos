let contador = 0;
let cantidadNumeros = 0;
while(contador<=100){
    if (contador % 6 == 0){
        console.log(contador, "es multiplo de 6");
        cantidadNumeros++
    }
    contador++;
}
console.log("La cantidad de numeros multiplos de 6 entre 0 y 100 es", cantidadNumeros);
