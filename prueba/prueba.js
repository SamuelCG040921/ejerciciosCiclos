let a = parseFloat(prompt("Ingrese la base"));
let b = parseFloat(prompt("Ingrese la potencia"));

function potencial(a, b) {
  let resultado = 1;
  while (b > 0) {
    if (b % 2 == 1) {
      resultado *= a;
    }
    a *= a;
    b = Math.floor(b / 2);
  }
  return resultado;
}
console.log(potencial(a, b));