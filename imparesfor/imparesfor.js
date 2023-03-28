let limite = parseFloat(prompt("Ingrese el numero limite"));

for(let contador =0; contador<=limite; contador++){
    if (contador % 2 != 0){
        console.log(contador, "es impar");
    }
}